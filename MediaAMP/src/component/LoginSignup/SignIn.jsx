import { SignIn } from "@clerk/clerk-react";

const SignInPage = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Welcome Back</h2>
      <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
    </div>
  );
};

const styles = {
  container: {
    padding: "40px",
    maxWidth: "420px",
    margin: "auto",
    marginTop: "80px",
    backgroundColor: "#1f2122",
    borderRadius: "20px",
    color: "#fff",
    textAlign: "center",
  },
  heading: {
    marginBottom: "30px",
  },
};

export default SignInPage;
