
import { render, screen } from '@testing-library/react';
import React from 'react';
import CustomerAccordion from '../../src/components/CustomerAccordion';

describe('group', () => {
    const testString = "Ian";

    it('should render when the name is provided', () => {
        render(<CustomerAccordion name = {testString}/>)
        const heading = screen.getByRole("heading")

        expect(heading).toBeInTheDocument();
        expect(heading).toHaveClass("accordion-header");
    })
    it('should render the button when the name is provided', () => {
        render(<CustomerAccordion name = {testString}/>)
        const button = screen.getByRole("button", {name:testString})

        expect(button).toBeInTheDocument();
        expect(button).toHaveClass("accordion-button");
    })
})