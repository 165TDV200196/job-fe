import React from "react";
import { Link } from "react-router-dom";
import "../../../scss/SearchJobs/KeyTag.scss";
export default function KeyTag() {
  return (
    <div className="box__key">
      <div className="key__title">
        <div className="key__icon">
          <i className="fab fa-slack-hash"></i>
        </div>
        <span>Top tuyển dụng</span>
      </div>
      <div className="key__content">
        <div className="key__tag">
          <Link to="/congviec">reactjs</Link>
        </div>
        <div className="key__tag">
          <Link to="/congviec">php</Link>
        </div>
        <div className="key__tag">
          <Link to="/congviec">laravel</Link>
        </div>
        <div className="key__tag">
          <Link to="/congviec">python</Link>
        </div>
        <div className="key__tag">
          <Link to="/congviec">android</Link>
        </div>
        <div className="key__tag">
          <Link to="/congviec">android</Link>
        </div>
        <div className="key__tag">
          <Link to="/congviec">tuyển gấp</Link>
        </div>
        <div className="key__tag">
          <Link to="/congviec">ios</Link>
        </div>
        <div className="key__tag">
          <Link to="/congviec">sql</Link>
        </div>
        <div className="key__tag">
          <Link to="/congviec">mysql</Link>
        </div>
        <div className="key__tag">
          <Link to="/congviec">trí tuệ nhân tạo</Link>
        </div>
        <div className="key__tag">
          <Link to="/congviec">.net</Link>
        </div>
        <div className="key__tag">
          <Link to="/congviec">fulltime</Link>
        </div>
        <div className="key__tag">
          <Link to="/congviec">partime</Link>
        </div>
      </div>
    </div>
  );
}
