import React from 'react';
import pt from 'date-fns/locale/pt-BR';
import { formatDistance } from 'date-fns';
import { Container, List, Title } from './styles';

function LatestPostsList() {
  return (
    <Container>
      <Title>Últimas Publicações</Title>
      <List>
        <li>
          AssCo has revamped the theory of versioning
          <div>
            {formatDistance(new Date('2020-05-13 22:15:00'), new Date(), {
              addSuffix: true,
              locale: pt,
            })}
          </div>
        </li>
        <li>
          Matleh
          <div>
            {formatDistance(new Date('2020-05-13 22:15:00'), new Date(), {
              addSuffix: true,
              locale: pt,
            })}
          </div>
        </li>
        <li>
          Have you ever needed to streamline your feature set? Right now?
          <div>
            {formatDistance(new Date('2020-05-13 22:15:00'), new Date(), {
              addSuffix: true,
              locale: pt,
            })}
          </div>
        </li>
        <li>
          Consulted eagerness unfeeling
          <div>
            {formatDistance(new Date('2020-05-13 22:15:00'), new Date(), {
              addSuffix: true,
              locale: pt,
            })}
          </div>
        </li>
      </List>
    </Container>
  );
}

export default LatestPostsList;
