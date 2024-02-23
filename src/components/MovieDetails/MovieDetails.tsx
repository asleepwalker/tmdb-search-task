import React, { FC } from 'react';

import { profileBase, posterBase, screenBase } from '../../api/config';
import useDetailsApi from '../../api/useDetailsApi';
import Dialog from '../Dialog/Dialog';
import Loadable from '../Loadable/Loadable';
import { MovieDetailsProps } from './MovieDetails.interface';
import formatAmount from '../../utils/formatAmount';
import formatDate from '../../utils/formatDate';
import formatDuration from '../../utils/formatDuration';

import styles from './MovieDetails.module.css';

const MovieDetails: FC<MovieDetailsProps> = ({ id, onClose }) => {
  const [data, loading, error] = useDetailsApi(id);

  return (
    <Dialog onClose={onClose}>
      <Loadable error={error} loading={loading}>
        {data && (
          <div className={styles.container}>
            <div className={styles.header}>
              {data.poster_path && <img loading="lazy" className={styles.poster} src={`${posterBase}${data.poster_path}`} />}

              <div className={styles.summary}>
                <h2 className={styles.title}>{data.title}</h2>

                <ul className={styles.meta}>
                  <li>{formatDate(data.release_date)}</li>
                  {data.genres.length > 0 && <li>{data.genres.map(item => item.name).join(', ')}</li>}
                  {data.runtime > 0 && <li>{formatDuration(data.runtime)}</li>}
                </ul>

                {data.poster_path && <img loading="lazy" className={styles.mobilePoster} src={`${screenBase}${data.poster_path}`} />}

                {data.tagline && <div className={styles.tagline}>"{data.tagline}"</div>}
                <div className={styles.description}>{data.overview}</div>

                <div className={styles.details}>
                  {data.production_countries.length > 0 && <p>Country: {data.production_countries.map(item => item.name).join(', ')}</p>}
                  {data.spoken_languages.length > 0 && <p>Language: {data.spoken_languages.map(item => item.english_name).join(', ')}</p>}
                  <p>Status: {data.status}</p>
                  {data.budget > 0 && <p>Budget: {formatAmount(data.budget)}</p>}
                  {data.revenue > 0 && <p>Revenue: {formatAmount(data.revenue)}</p>}
                </div>

                {data.keywords.keywords.length > 0 && (
                  <ul className={styles.keywords}>
                    {data.keywords.keywords.map(item => <li>{item.name}</li>)}
                  </ul>
                )}
              </div>
            </div>

            {data.credits.cast.length > 0 && (
              <div className={styles.section}>
                <h3 className={styles.sectionTitle}>Cast</h3>
                <div className={styles.cast}>
                  {data.credits.cast.map(item => (
                    <div className={styles.actor}>
                      {item.profile_path
                        ? <img loading="lazy" className={styles.actorPhoto} src={`${profileBase}${item.profile_path}`} />
                        : <div className={styles.actorPhoto} />
                      }
                      <h4 className={styles.actorName}>{item.name}</h4>
                      <p className={styles.actorRole}>{item.character}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {data.recommendations.results.length > 0 && (
              <div className={styles.section}>
                <h3 className={styles.sectionTitle}>Recommendations</h3>
                <div className={styles.recommendations}>
                  {data.recommendations.results.map(item => (
                    <div className={styles.recommendation}>
                      {data.poster_path && <img loading="lazy" className={styles.recommendationPoster} src={`${screenBase}${item.poster_path}`} />}
                      <h4 className={styles.recommendationName}>{item.title}</h4>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </Loadable>
    </Dialog>
  );
}

export default MovieDetails;
