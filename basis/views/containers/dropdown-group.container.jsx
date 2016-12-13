//import React, {Component, PropTypes} from 'react';
//import DropdownGroup from 'views/components/dropdown-group';
//import Dropdown from 'views/components/dropdown';
//import DropdownMenu from 'views/components/dropdown-menu';
//import { bindActionCreators } from 'redux';
//import { connect } from 'react-redux';
//import {pick, keysIn, map} from 'lodash';
//import {RestaurantsActionsFacade as RestaurantsActions} from 'store/restaurants/restaurants';
//import {findDOMNode} from 'react-dom';
//
//function mapStateToProps(state) {
//  return {
//    viewSortFilter: pick(state.restaurants, 'view', 'sort', 'filter'),
//  };
//}
//
//function mapDispatchToProps(dispatch) {
//  return {
//    actions: bindActionCreators(RestaurantsActions, dispatch),
//  };
//}
//
//const data = [
//  {value: '0', label: 'Edit'},
//  {value: '1', label: 'Delete'},
//  {value: '2', label: 'Select'},
//  {type: 'header', label: 'header'},
//  {type: 'header', label: 'header', separator: true},
//  {value: '3', label: 'Link', separator: true},
//];
//
//class DropdownGroupContainer extends Component {
//  constructor(props) {
//    super(props);
//
//    this.state = {
//      open: false,
//    };
//
//    this._onClick = this._onClick.bind(this);
//    this._onItemClick = this._onItemClick.bind(this);
//    this._onClickOutside = this._onClickOutside.bind(this);
//  }
//
//  componentDidMount() {
//    document.addEventListener('click', this._onClickOutside, true);
//  }
//
//  componentWillUnmount() {
//    document.removeEventListener('click', this._onClickOutside, true);
//  }
//
//  _onItemClick(selectedValue) {
//    console.log('selectedValue', selectedValue);
//  }
//
//
//  _onClick(ev) {
//    ev.preventDefault();
//    const node = ev.target;
//    const index = [].slice.call(node.parentNode.parentNode.children).indexOf(node.parentNode);
//    const selectedFilter = keysIn(this.props.viewSortFilter)[index];
//    this.props.actions.updateFilter(selectedFilter);
//  }
//
//  _renderDropdownElements() {
//    return map(keysIn(this.props.viewSortFilter), (key)=> {
//      const {label, opened} = this.props.viewSortFilter[key];
//      const dropdownKey = `Dropdown-${key}`;
//      return (
//        <Dropdown
//          label={label}
//          open={opened}
//          key={dropdownKey}
//          onClick={this._onClick}
//        >
//          <DropdownMenu items={data} onItemClick={this._onItemClick}/>
//        </Dropdown>
//      );
//    });
//  }
//
//  _onClickOutside(ev) {
//    const domNode = findDOMNode(this);
//    if (!domNode || !domNode.contains(ev.target)) {
//      this.props.actions.updateFilter();
//    }
//  }
//
//  render() {
//    const dropdownElements = this._renderDropdownElements();
//    return (
//      <DropdownGroup>
//        {dropdownElements}
//      </DropdownGroup>
//    );
//  }
//}
//
//DropdownGroupContainer.propTypes = {
//  viewSortFilter: PropTypes.object.isRequired,
//  actions: PropTypes.object,
//};
//
//export default connect(mapStateToProps, mapDispatchToProps)(DropdownGroupContainer);
