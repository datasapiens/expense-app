// outsource dependencies
import _ from 'lodash';
import React, { memo, useCallback } from 'react';
import { Button, ListGroup, ListGroupItem } from 'reactstrap';
import { useControllerData, useControllerActions } from 'redux-saga-controller';

// local dependencies
import { controller } from '../../controller';


export const CategoryList = memo(function CategoryList () {
  const { categories } = useControllerData(controller);
  const { removeCategory } = useControllerActions(controller);

  const handleRemoveCategory = useCallback(({ id }) => {
    _.isFunction(removeCategory) && removeCategory({ id })
  }, [removeCategory])

  return (<>
    <ListGroup flush={true}>
      { !_.size(categories) ? <>
        <ListGroupItem className={'text-center'}>
          Categories list not available. < br />
          Please create a new category.
        </ListGroupItem>
      </> : <>
        { _.map(categories, (catItem) => (
          <ListGroupItem key={catItem.id} className="d-flex gap-3 py-3">
            <img src="https://github.com/twbs.png" alt="icon"
                 width="32"
                 height="32"
                 className="rounded-circle flex-shrink-0"
            />
            <div className="d-flex gap-2 w-100 justify-content-between align-items-center">
              <div>
                <h6 className="mb-0">{ catItem.label }</h6>
                {/*<small className="opacity-50 text-nowrap">now</small>*/}
              </div>
              <div>
                <Button size="sm"
                        color="transparent"
                        className="btn-close"
                        aria-label={`Remove ${ catItem.label } category`}
                        title={`Remove ${ catItem.label } category`}
                        onClick={(e) => handleRemoveCategory({ id: catItem.id })}
                >
                  <span className="visually-hidden">Remove { catItem.label } category</span>
                </Button>
              </div>
            </div>
          </ListGroupItem>
        )) }
      </> }
    </ListGroup>
  </>);
});
