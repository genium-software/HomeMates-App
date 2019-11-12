import React from "react";
import styled from "styled-components";
import Icon from "react-native-vector-icons/MaterialIcons";

const HeaderButtonMenu = props => {
  const _onPressHandler = () => {
    props.navigation.toggleDrawer();
  };

  return (
    <MenuButton onPress={_onPressHandler}>
      <Icon name="menu" size={35} color={"#f2f2f2"} />
    </MenuButton>
  );
};

const MenuButton = styled.TouchableOpacity`
  margin: 1px;
  padding-left: 10px;
  padding-vertical: 4px;
`;

export default HeaderButtonMenu;
