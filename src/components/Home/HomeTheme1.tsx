"use client"
import Posts from '@/components/Posts';
import MainLayout from '@/layouts/MainLayout/MainLayout';
import { Button, Text } from '@mantine/core';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import { SET_ACTIVE_USER, REMOVE_ACTIVE_USER } from '@/redux/slices/authSlice';

export default function HomeTheme1() {
  // For use redux only we need to give use client, Otherwise use default use server for better seo
  const { isLoggedIn, displayName } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
    const handleLogin = () => {
    dispatch(SET_ACTIVE_USER({ displayName: 'John Doe' }));
  };

  const handleLogout = () => {
    dispatch(REMOVE_ACTIVE_USER());
  };
  return (
    <MainLayout>
    <section>
      <Text>Login Status: {isLoggedIn ? 'Logged In' : 'Logged Out'}</Text>
      {displayName && <Text>Welcome, {displayName}!</Text>}
      
      <Button onClick={handleLogin} disabled={isLoggedIn}>
        Login
      </Button>
      
      <Button onClick={handleLogout} disabled={!isLoggedIn}>
        Logout
      </Button>

      <br />
      <br />
      <br />
      <Posts />
    </section>
      Home Theme 1
  </MainLayout>
  );
} 