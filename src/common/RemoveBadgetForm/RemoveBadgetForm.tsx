import { FC, useState } from 'react';
import { MultiSelect } from 'react-multi-select-component';
import { IBudget } from '../../types/budget';
import { filterByField } from '../../utils/helpers';
import { ITransaction } from '../../types/transaction';
import { Button } from '../../components';
import useActions from '../../hooks/useTypedDispatch';
import './index.scss';

const UNCATEGORIZED = 'uncategorized';

interface RemoveBudgetFormProps {
  budgets: IBudget[];
  transactions: ITransaction[];
  toggle: () => void;
}

interface ISelectedBadgets extends IBudget {
  value: string;
}

const RemoveBudgetForm: FC<RemoveBudgetFormProps> = ({
  budgets,
  toggle,
  transactions,
}) => {
  const [selected, setSelected] = useState<ISelectedBadgets[]>([]);
  const { removeBudget, addTransaction, addBudget } = useActions();
  // helper vars
  const options = budgets
    .map((badget) => {
      return {
        ...badget,
        value: badget.label,
      };
    })
    .filter((bg) => bg.label !== UNCATEGORIZED);

  const hasUncategorized = budgets.find(
    (budget) => budget.label.toLowerCase() === UNCATEGORIZED
  );

  const removeBadgets = () => {
    if (!hasUncategorized) {
      addBudget({ id: UNCATEGORIZED, label: UNCATEGORIZED });
    }

    selected.forEach((item) => {
      const currentTransactions = filterByField<ITransaction, 'category'>(
        item.id,
        'category',
        transactions
      );

      currentTransactions.forEach((trc) =>
        addTransaction({
          ...trc,
          category: UNCATEGORIZED,
        })
      );

      removeBudget(item.id);
    });

    toggle();
  };

  return (
    <div className="multiselect">
      <MultiSelect
        options={options}
        onChange={setSelected}
        labelledBy={'Select'}
        value={selected}
      />
      <Button label={`Remove (${selected.length})`} onClick={removeBadgets} />
    </div>
  );
};

export default RemoveBudgetForm;
