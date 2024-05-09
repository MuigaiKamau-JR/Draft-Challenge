import React from 'react';

const BotCard = ({ bot, handleClick, handleDischarge }) => {
  return (
    <div className="ui column">
      <div className="ui card" key={bot.id} onClick={() => handleClick(bot.id)}>
        <div className="image">
          <img alt={bot.name} src={bot.avatar_url} />
        </div>
        <div className="content">
          <div className="header">{bot.name}</div>
          <div className="meta text-wrap">
            <strong>{bot.bot_class}</strong>
            <br />
            <small>{bot.catchphrase}</small>
          </div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat" /> {bot.health}
          </span>
          <span>
            <i className="icon lightning" /> {bot.damage}
          </span>
          <span>
            <i className="icon star" /> {bot.armor}
          </span>
          <span>
            <div className="ui center aligned segment basic">
              <button
                className="ui mini red button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleDischarge(bot.id);
                }}
              >
                X
              </button>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default BotCard;