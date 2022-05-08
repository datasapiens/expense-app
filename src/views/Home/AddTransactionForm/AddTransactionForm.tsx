import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'react-i18next';
import * as yup from 'yup';
import { useSelector } from 'react-redux';
import { useDispatch } from 'state/hooks/useDispatch';
import { categoriesSelector } from 'state/selectors/categoriesSelector';
import { Transactions } from 'state/slice/transactions';
import { Input } from 'components/common/Input';
import { Select } from 'components/common/Select';

export const AddTransactionForm = () => {
	const { t } = useTranslation();
	const dispatch = useDispatch();
	const categories = useSelector(categoriesSelector);

	const schema = yup.object().shape({
		label: yup.string().required(),
		amount: yup.number().required(),
		date: yup.date().required(),
		categories: yup.string().oneOf(categories.map(({ id }) => id)),
	});

	const methods = useForm<{
		label: string;
		date: string;
		amount: number;
		category: string;
	}>({
		defaultValues: {
			date: new Date().toISOString().substr(0, 10),
		},
		resolver: yupResolver(schema),
	});

	return (
		<FormProvider {...methods}>
			<form
				onSubmit={methods.handleSubmit((data) => {
					const result = {
						...data,
						date: data.date.toString(),
					};
					dispatch(Transactions.actions.add(result));
					methods.reset();
				})}
			>
				<h2> {t('views.transactions.add-new-transaction')}</h2>
				<Input type="input" label="Label" name="label" />
				<Input type="date" label="Date" name="date" />
				<Input type="input" label="Amount" name="amount" />
				<Select
					label="Category"
					name="category"
					options={categories.map(({ id, label }) => ({ value: id, label }))}
				/>

				<div>
					<button type="submit"> {t('actions.add')}</button>
				</div>
			</form>
		</FormProvider>
	);
};
