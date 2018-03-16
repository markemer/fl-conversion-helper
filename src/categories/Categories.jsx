import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { fetchPossessions } from '../possessions/actions';
import * as items from '../items/constants';
import Item from '../items/Item';
import Category from './Category';

class Categories extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchPossessions();
  }

  render() {
    const { preferences: { enablements, visibilities } } = this.props;
    return (
      <Fragment>
        {visibilities.tier1 && (
          <Category heading="Tier 1">
            {items.tier1.map((id) => (
              <Item
                key={id}
                id={id}
                enablementPreference={enablements.tiers}
              />
            ))}
          </Category>
        )}
        {visibilities.tier2 && (
          <Category heading="Tier 2">
            {items.tier2.map((id) => (
              <Item
                key={id}
                id={id}
                enablementPreference={enablements.tiers}
              />
            ))}
          </Category>
        )}
        {visibilities.tier3 && (
          <Category heading="Tier 3">
            {items.tier3.map((id) => (
              <Item
                key={id}
                id={id}
                enablementPreference={enablements.tiers}
              />
            ))}
          </Category>
        )}
        {visibilities.tier4 && (
          <Category heading="Tier 4">
            {items.tier4.map((id) => (
              <Item
                key={id}
                id={id}
                enablementPreference={enablements.tiers}
              />
            ))}
          </Category>
        )}
        {visibilities.faction && (
          <Category heading="Faction Items">
            {items.factionItems.map((id) => (
              <Item
                key={id}
                id={id}
                enablementPreference={enablements.tiers}
              />
            ))}
          </Category>
        )}
        {visibilities.fidgetingWriter && (
          <Category heading="Fidgeting Writer">
            {items.fidgetingWriter.map((id) => (
              <Item
                key={id}
                id={id}
                enablementPreference={enablements.tiers}
              />
            ))}
          </Category>
        )}
      </Fragment>
    );
  }
}

function mapState({ possessions, preferences }) {
  return { possessions, preferences };
}

export default connect(mapState, { fetchPossessions })(Categories);