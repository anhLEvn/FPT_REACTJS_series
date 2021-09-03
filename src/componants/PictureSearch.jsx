import React from 'react'

function PictureSearch() {
    return (
       <div>
  <div className="ui segment container" style={{marginTop: 50}}>
    <form className="ui form">
      <div className="field">
        <div className="ui icon input">
          <input type="text" placeholder=" Search Picture" />
          <i className="search icon" />
        </div>
      </div>
    </form>
  </div>
  <div className="ui divider" />
  <div className="ui four column grid container">
    <div className="column">
      <div className="ui card">
        <div className="image">
          <img src="images/photo1" alt="Photo" />
        </div>
      </div>
    </div>
  </div>
</div>

    )
}

export default PictureSearch

