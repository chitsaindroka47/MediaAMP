import { ClerkProvider, SignedIn, SignedOut, RedirectToSignIn } from '@clerk/clerk-react';
import { Routes, Route } from "react-router-dom";
import { useState } from "react"; 
import Home from "./component/Home/Home";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/footer";
import SignIn from "./component/LoginSignup/SignIn";
import SignUp from "./component/LoginSignup/SignUp";
import ContactUs from './component/Contactus/Contactus';
import 'bootstrap-icons/font/bootstrap-icons.css';

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

function App() {
 
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPlatform, setSelectedPlatform] = useState("All");

  return (
    <ClerkProvider publishableKey={clerkPubKey}>
     
      <Header
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedPlatform={selectedPlatform}
        setSelectedPlatform={setSelectedPlatform}
      />

      <Routes>
     
        <Route path="/contactus" element={<ContactUs />} />

        {/* Existing auth routes */}
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />

        <Route path="/" element={
          <>
            <SignedIn>
              {/* ✅ Home now uses state props */}
              <Home
                searchTerm={searchTerm}
                selectedPlatform={selectedPlatform}
              />
            </SignedIn>
            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          </>
        } />
      </Routes>

      <Footer />
    </ClerkProvider>
  );
}

export default App;
