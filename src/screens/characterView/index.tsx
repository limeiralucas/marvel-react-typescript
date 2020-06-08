import React from "react";
import { connect } from "react-redux";
import { withRouter, match } from "react-router";
import { History } from "history";

import { Character } from "../../store/ducks/characters/types";
import { ApplicationState } from "../../store";

import "./index.css";
import { Serie } from "../../store/ducks/series/types";
import Card from "../../components/card/card";
import Button from "../../components/button/button";

interface StateProps {
  character?: Character;
  series: Serie[];
}

interface RouterProps {
  history: History;
  match: match;
}

type Props = StateProps & RouterProps;

const CharacterScreen: React.SFC<Props> = ({
  character,
  series,
  history,
  match,
}) => {
  return character ? (
    <div className="character-view">
      <div className="character-view__header">
        <Button
          value="Back"
          leftIcon={<i className="fa fa-caret-left"></i>}
          onClick={() => history.push("/")}
        />
      </div>
      <div className="character-view__image">
        <Card
          imageUrl={`${character.thumbnail.path}.${character.thumbnail.extension}`}
        />
        {character.name}
      </div>
      <div className="character-view__serie-grid">
        {series.map((serie) => (
          <Card
            key={serie.id}
            imageUrl={`${serie.thumbnail.path}.${serie.thumbnail.extension}`}
            text={serie.title}
          />
        ))}
      </div>
    </div>
  ) : (
    <div>Loading</div>
  );
};

const mapStateToProps = (state: ApplicationState) => ({
  character: state.characters.characterSelected,
  series: state.series.data,
});

export default withRouter(connect(mapStateToProps)(CharacterScreen));
