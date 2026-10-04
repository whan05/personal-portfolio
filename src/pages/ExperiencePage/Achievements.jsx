import getLocalizedText from '../../utils/getLocalizedText'

export default function Achievements({ achievements, lang }) {
  return <ul className="achievement-list">{achievements.map((achievement) => (
    <li key={getLocalizedText(achievement, 'en')}>
      <p>{getLocalizedText(achievement, lang)}</p>
      {achievement.source && <a className="achievement-source" href={achievement.source} target="_blank" rel="noreferrer">{getLocalizedText(achievement.sourceLabel, lang)} ↗</a>}
    </li>
  ))}</ul>
}
