// outsource dependencies
import cn from 'classnames';
import { useToggle } from 'react-use';
import React, { memo, PropsWithChildren, useCallback } from 'react';
import {
  Nav,
  Card,
  Button,
  NavLink,
  NavItem,
  TabPane,
  CardBody,
  Collapse,
  CardHeader,
  TabContent,
} from 'reactstrap';


// local dependencies
import { CategoryList } from './category-list';
import { CategoryForm } from './category-form';


export const Category = memo<PropsWithChildren<{ className?: string }>>(function Category ({ className }) {
  const [isOpened, setOpen] = useToggle(false);

  // const { initialize, getSelf } = useControllerActions(controller);
  const handleShowCategoryForm = useCallback(() => {
    setOpen()
  }, [setOpen])

  return (<Card className={cn(className)}>
    <CardHeader>
      <div className="d-flex flex-row align-items-end justify-content-between">
        <Nav tabs={true} card={true}>
          <NavItem>
            <NavLink
              className="active"
              onClick={function noRefCheck(){}}
            >
              Categories
            </NavLink>
          </NavItem>
        </Nav>
        <Button outline={false}
                color="success"
                title="Add category"
                onClick={handleShowCategoryForm}
                style={{ width: 28, height: 28, fontSize: 25, lineHeight: '25px' }}
                className="rounded-circle fw-bold p-0"
        >
          <i className="bi bi-plus" />
          <span className="visually-hidden">Add category</span>
        </Button>
      </div>
    </CardHeader>
    <CardBody className={'p-0'}>
      <TabContent activeTab="1">
        <TabPane tabId="1">
          <Collapse isOpen={isOpened} className={'border-0 border-bottom'}>
            <CategoryForm />
          </Collapse>
          <CategoryList />
        </TabPane>
      </TabContent>
    </CardBody>
  </Card>);
});
