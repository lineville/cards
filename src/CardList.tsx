/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Card } from './Card'

const CardList = (props: { cards: Array<Card> }) => {
  console.log(props.cards)
  return (
    <section className="card-list">
      {props.cards.map((card: Card) => {
        const { header, subheader, avatar, title, name, tags } = card

        return (
          <article className="card" key={header}>
            <header className="card-header">
              <h2>{header}</h2>
              <p>{subheader}</p>
            </header>

            <div className="card-author">
              <a
                className="author-avatar"
                href="https://liamneville.me"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={avatar} alt="avatar" />
              </a>
              <svg className="half-circle" viewBox="0 0 106 57">
                <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
              </svg>

              <div className="author-name">
                <div className="author-name-prefix">{title}</div>
                {name}
              </div>
            </div>
            <div className="tags">
              {tags?.map((tag) => (
                <a
                  href="https://liamneville.me"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {tag}
                </a>
              ))}
            </div>
          </article>
        )
      })}
    </section>
  )
}

export default CardList
