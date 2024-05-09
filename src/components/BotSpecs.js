import React from 'react';
import { Link } from 'react-router-dom';

const BotSpecs = ({ bot, enlistBot }) => {
  return (
    <div className="bot-specs">
      <h2>{bot.name} Details</h2>
      <div className="bot-details">
        <img className="bot-image" src={bot.avatar_url} alt={bot.name} />
        <div className="bot-stats">
          <p><strong>Health:</strong> {bot.health}</p>
          <p><strong>Damage:</strong> {bot.damage}</p>
          <p><strong>Armor:</strong> {bot.armor}</p>
        </div>
      </div>
      <div className="button-group">
        <button className="enlist-button" onClick={() => enlistBot(bot.id)}>Enlist Bot</button>
        <Link className="back-link" to="/">Back to Bot Collection</Link>
      </div>
    </div>
  );
}

export default BotSpecs;