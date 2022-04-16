import React, { useState, useRef, useEffect } from "react";
import '../../firebase';
import { getAuth, onAuthStateChanged, User } from 'firebase/auth';

const auth = getAuth();

export function useAuthentication() {
  const [user, setUser] = useState(User);

  useEffect(() => {
    const unsubscribeFromAuthStatuChanged = onAuthStateChanged(auth, (user) => {
      if (user && user.emailVerified) {
        // User is signed in, see docs for a list of available properties
        setUser(user);
      } else {
        // User is signed out
        setUser(undefined);
      }
    });

    return unsubscribeFromAuthStatuChanged;
  }, []);

  return {
    user
  };
}