import { PageLayout } from 'components/layouts/PageLayout';
import { Transactions } from './Transactions';
import { Categories } from './Categories';
import { AddCategoryForm } from './AddCategoryForm';
import { AddTransactionForm } from './AddTransactionForm';

export const Home = () => (
	<PageLayout>
		<Categories />
		<AddCategoryForm />
		<Transactions />
		<AddTransactionForm />
	</PageLayout>
);
