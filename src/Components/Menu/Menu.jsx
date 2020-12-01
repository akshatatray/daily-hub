import React, { useEffect } from "react";
import "./Menu.css";

import { getMenuInfo, getItems } from "../../Redux/actions";
import { connect } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import ItemList from "../Item/ItemList";

const Menu = (props) => {
  const history = useHistory();
  const { id } = useParams();
  useEffect(() => {
    props.getMenuInfo(id);
    props.getItems(id);
  }, []);

  return (
    <div className="Menu">
      <Navbar />
      <svg
        width="40px"
        height="40px"
        viewBox="0 0 16 16"
        className="bi bi-arrow-left-square-fill back"
        fill="white"
        xmlns="http://www.w3.org/2000/svg"
        onClick={ history.goBack }
      >
        <path
          fill-rule="evenodd"
          d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm9.5 8.5a.5.5 0 0 0 0-1H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5z"
        />
      </svg>
      <div className="menuinfo">
        <h1 className="MenuShopName">{props.menuInfo?.name}</h1>
        <img src={props.menuInfo?.photoURL} alt="" className="MenuShopLogo" />
      </div>
      <ItemList items={props.items} />
    </div>
  );
};

const mapActionWithProps = {
  getMenuInfo,
  getItems,
};

const mapStateWithProps = (state) => {
  return {
    menuInfo: state.menuInfo,
    items: state.items,
  };
};

export default connect(mapStateWithProps, mapActionWithProps)(Menu);