import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import HeroSection from '../landing_page/home/HeroSection';

describe('Hero Component', () => {
  test("renders hero image", () => {
    render(<HeroSection />);
    
    const heroImage = screen.getByAltText("Hero images"); 

    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute('src', 'media/images/homeHero.png');
  });

  test("renders signup button", () => {
   render(<HeroSection />);
   
   const signupBtn = screen.getByRole("button",{name:"Sign up for free"}); 

   expect(signupBtn).toBeInTheDocument();
   expect(signupBtn).toHaveClass("p-2");
 });
});
