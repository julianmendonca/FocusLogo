import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';

describe('Title', () => {
    it('renders correctly', () => {
        render(<div>Title</div>);
        screen.getByText(/Title/i);
    });
});
