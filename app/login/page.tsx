import { LoginForm } from "@/app/components/auth/login-form";
import { Container } from "@/app/components/Container";

export default function LoginPage() {
  return (
    <Container>
      <div className="py-20">
        <LoginForm />
      </div>
    </Container>
  );
}
