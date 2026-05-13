import TechItem from './TechItem';
import styles from './IndexCard.module.css';

/**
 * Toolbox index card — one per skill category.
 * Passes desc through to TechItem for the hover description.
 */
export default function IndexCard({ number, title, items, rotation, bg, topColor }) {
  return (
    <div
      className={styles.card}
      style={{
        transform:  `rotate(${rotation}deg)`,
        background: bg,
        borderTop:  `10px solid ${topColor}`,
      }}
    >
      <div className={styles.paperclip} />
      <div className={styles.title}>
        {String(number).padStart(2, '0')} · {title}
      </div>
      <div className={styles.list}>
        {items.map((item) => (
          <TechItem key={item.name} name={item.name} slug={item.slug} localImg={item.localImg} desc={item.desc} />
        ))}
      </div>
    </div>
  );
}
