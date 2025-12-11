import { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { ChevronLeft } from 'lucide-react-native';
import { useRouter } from 'expo-router';
import {
  Button,
  Input,
  AuthHeader,
  StepIndicator,
  FormSection,
  PasswordInput,
  SocialLoginButtons,
} from '@/frontend/components';
import { getValidationError } from '@/frontend/utils/validation';
import type { SignUpData, AuthErrors } from '@/frontend/types/auth';

type AuthMode = 'login' | 'signup';

export function AuthScreen() {
  const router = useRouter();
  const [mode, setMode] = useState<AuthMode>('login');
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<AuthErrors>({});
  const [formData, setFormData] = useState<SignUpData>({
    step: 'email',
    email: '',
    password: '',
    confirmPassword: '',
    fullName: '',
    username: '',
    phone: '',
  });

  const handleBack = () => {
    if (mode === 'login') return;
    if (step > 1) {
      setStep((prev) => (prev - 1) as 1 | 2 | 3);
    } else {
      setMode('login');
      setStep(1);
    }
  };

  const validateStep = (): boolean => {
    const newErrors: AuthErrors = {};

    if (step === 1) {
      const emailError = getValidationError('email', formData.email || '');
      if (emailError) newErrors.email = emailError;
    } else if (step === 2) {
      const passwordError = getValidationError('password', formData.password || '');
      if (passwordError) newErrors.password = passwordError;
      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Senhas não coincidem';
      }
    } else if (step === 3) {
      const nameError = getValidationError('fullName', formData.fullName || '');
      if (nameError) newErrors.fullName = nameError;
      const usernameError = getValidationError(
        'username',
        formData.username || ''
      );
      if (usernameError) newErrors.username = usernameError;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextStep = async () => {
    if (!validateStep()) return;

    if (step < 3) {
      setStep((prev) => (prev + 1) as 1 | 2 | 3);
    } else {
      await handleSignUp();
    }
  };

  const handleSignUp = async () => {
    setLoading(true);
    try {
      // TODO: Implement API call to backend
      console.log('Sign up data:', formData);
      // After successful signup, navigate to home or verify email
      router.replace('/(tabs)');
    } catch (error) {
      setErrors({ email: 'Erro ao criar conta. Tente novamente.' });
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async () => {
    if (!validateStep()) return;

    setLoading(true);
    try {
      // TODO: Implement API call to backend
      console.log('Login data:', {
        email: formData.email,
        password: formData.password,
      });
      // After successful login, navigate to home
    } catch (error) {
      setErrors({ email: 'Email ou senha incorretos.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <View className="flex-1 bg-white">
      {/* Header */}
      <View className="pt-4 pb-2 px-6 flex-row items-center justify-between border-b border-gray-100">
        <Pressable
          onPress={handleBack}
          disabled={mode === 'login' && step === 1}
          className="p-2">
          <ChevronLeft
            size={24}
            color={mode === 'login' && step === 1 ? '#d1d5db' : '#1f2937'}
          />
        </Pressable>
        <Text className="text-lg font-semibold text-gray-900">
          {mode === 'login' ? 'Entrar' : 'Criar Conta'}
        </Text>
        <View className="w-10" />
      </View>

      {/* Content */}
      <View className="flex-1 px-6 py-8">
        {mode === 'login' ? (
          <LoginForm
            email={formData.email || ''}
            password={formData.password || ''}
            errors={errors}
            loading={loading}
            onEmailChange={(email) => {
              setFormData({ ...formData, email });
              setErrors({ ...errors, email: undefined });
            }}
            onPasswordChange={(password) => {
              setFormData({ ...formData, password });
              setErrors({ ...errors, password: undefined });
            }}
            onLogin={handleLogin}
            onSignUpPress={() => {
              setMode('signup');
              setStep(1);
              setFormData({
                step: 'email',
                email: '',
                password: '',
                confirmPassword: '',
                fullName: '',
                username: '',
                phone: '',
              });
              setErrors({});
            }}
            onGooglePress={() => console.log('Google login')}
            onGithubPress={() => console.log('GitHub login')}
          />
        ) : (
          <>
            <StepIndicator currentStep={step} totalSteps={3} />
            {step === 1 && (
              <SignUpEmailStep
                email={formData.email || ''}
                error={errors.email}
                onEmailChange={(email) => {
                  setFormData({ ...formData, email });
                  setErrors({ ...errors, email: undefined });
                }}
              />
            )}
            {step === 2 && (
              <SignUpPasswordStep
                password={formData.password || ''}
                confirmPassword={formData.confirmPassword || ''}
                passwordError={errors.password}
                confirmPasswordError={errors.confirmPassword}
                onPasswordChange={(password) => {
                  setFormData({ ...formData, password });
                  setErrors({ ...errors, password: undefined });
                }}
                onConfirmPasswordChange={(confirmPassword) => {
                  setFormData({ ...formData, confirmPassword });
                  setErrors({ ...errors, confirmPassword: undefined });
                }}
              />
            )}
            {step === 3 && (
              <SignUpProfileStep
                fullName={formData.fullName || ''}
                username={formData.username || ''}
                phone={formData.phone || ''}
                fullNameError={errors.fullName}
                usernameError={errors.username}
                phoneError={errors.phone}
                onFullNameChange={(fullName) => {
                  setFormData({ ...formData, fullName });
                  setErrors({ ...errors, fullName: undefined });
                }}
                onUsernameChange={(username) => {
                  setFormData({ ...formData, username });
                  setErrors({ ...errors, username: undefined });
                }}
                onPhoneChange={(phone) => {
                  setFormData({ ...formData, phone });
                  setErrors({ ...errors, phone: undefined });
                }}
              />
            )}

            {/* Next Button */}
            <View className="mt-8">
              <Button
                onPress={handleNextStep}
                loading={loading}
                fullWidth
                size="lg">
                {step === 3 ? 'Criar Conta' : 'Continuar'}
              </Button>
            </View>
          </>
        )}
      </View>
    </View>
  );
}

// Login Form Component
interface LoginFormProps {
  email: string;
  password: string;
  errors: AuthErrors;
  loading: boolean;
  onEmailChange: (email: string) => void;
  onPasswordChange: (password: string) => void;
  onLogin: () => void;
  onSignUpPress: () => void;
  onGooglePress: () => void;
  onGithubPress: () => void;
}

function LoginForm({
  email,
  password,
  errors,
  loading,
  onEmailChange,
  onPasswordChange,
  onLogin,
  onSignUpPress,
  onGooglePress,
  onGithubPress,
}: LoginFormProps) {
  return (
    <FormSection
      title="Bem-vindo de volta"
      description="Entre com sua conta para continuar">
      <Input
        label="Email"
        value={email}
        onChangeText={onEmailChange}
        placeholder="seu@email.com"
        keyboardType="email-address"
        autoCapitalize="none"
        error={errors.email}
      />

      <PasswordInput
        value={password}
        onChangeText={onPasswordChange}
        placeholder="Senha"
        error={errors.password}
      />

      <Pressable>
        <Text className="text-sky-500 font-semibold text-sm">
          Esqueceu a senha?
        </Text>
      </Pressable>

      <Button onPress={onLogin} loading={loading} fullWidth size="lg">
        Entrar
      </Button>

      <SocialLoginButtons
        onGooglePress={onGooglePress}
        onGithubPress={onGithubPress}
      />

      <View className="flex-row items-center justify-center gap-2">
        <Text className="text-gray-600">Não tem uma conta?</Text>
        <Pressable onPress={onSignUpPress}>
          <Text className="text-sky-500 font-semibold">Cadastre-se</Text>
        </Pressable>
      </View>
    </FormSection>
  );
}

// Sign Up Steps Components
interface SignUpEmailStepProps {
  email: string;
  error?: string;
  onEmailChange: (email: string) => void;
}

function SignUpEmailStep({
  email,
  error,
  onEmailChange,
}: SignUpEmailStepProps) {
  return (
    <FormSection
      title="Qual é seu email?"
      description="Usaremos para criar e recuperar sua conta">
      <Input
        label="Email"
        value={email}
        onChangeText={onEmailChange}
        placeholder="seu@email.com"
        keyboardType="email-address"
        autoCapitalize="none"
        error={error}
      />
    </FormSection>
  );
}

interface SignUpPasswordStepProps {
  password: string;
  confirmPassword: string;
  passwordError?: string;
  confirmPasswordError?: string;
  onPasswordChange: (password: string) => void;
  onConfirmPasswordChange: (password: string) => void;
}

function SignUpPasswordStep({
  password,
  confirmPassword,
  passwordError,
  confirmPasswordError,
  onPasswordChange,
  onConfirmPasswordChange,
}: SignUpPasswordStepProps) {
  return (
    <FormSection
      title="Crie uma senha"
      description="Mínimo 8 caracteres para sua segurança">
      <PasswordInput
        value={password}
        onChangeText={onPasswordChange}
        placeholder="Senha"
        error={passwordError}
      />
      <PasswordInput
        value={confirmPassword}
        onChangeText={onConfirmPasswordChange}
        placeholder="Confirmar senha"
        error={confirmPasswordError}
      />
    </FormSection>
  );
}

interface SignUpProfileStepProps {
  fullName: string;
  username: string;
  phone: string;
  fullNameError?: string;
  usernameError?: string;
  phoneError?: string;
  onFullNameChange: (fullName: string) => void;
  onUsernameChange: (username: string) => void;
  onPhoneChange: (phone: string) => void;
}

function SignUpProfileStep({
  fullName,
  username,
  phone,
  fullNameError,
  usernameError,
  phoneError,
  onFullNameChange,
  onUsernameChange,
  onPhoneChange,
}: SignUpProfileStepProps) {
  return (
    <FormSection
      title="Conte-nos sobre você"
      description="Informações básicas do seu perfil">
      <Input
        label="Nome Completo"
        value={fullName}
        onChangeText={onFullNameChange}
        placeholder="João Silva"
        error={fullNameError}
      />
      <Input
        label="Usuário"
        value={username}
        onChangeText={onUsernameChange}
        placeholder="joaosilva"
        autoCapitalize="none"
        error={usernameError}
      />
      <Input
        label="Telefone (opcional)"
        value={phone}
        onChangeText={onPhoneChange}
        placeholder="(11) 99999-9999"
        keyboardType="phone-pad"
        error={phoneError}
      />
    </FormSection>
  );
}
