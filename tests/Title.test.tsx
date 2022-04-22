import Title from '@/components/Text/Title';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';

describe('Title', () => {
    it('renders correctly', () => {
        render(<Title>Title</Title>);
        screen.getByText(/Title/i);
    });
});
