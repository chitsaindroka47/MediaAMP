import { SignUp } from "@clerk/clerk-react";

const SignUpPage = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Create Your Account</h2>
      <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
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

export default SignUpPage;
