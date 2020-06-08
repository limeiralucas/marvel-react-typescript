import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { History } from "history";
import { Dispatch, bindActionCreators } from "redux";

import { Character } from "../../store/ducks/characters/types";
import { ApplicationState } from "../../store";

import * as SeriesActions from "../../store/ducks/series/actions";
import * as CharacterActions from "../../store/ducks/characters/actions";

import "./index.css";
import { Serie } from "../../store/ducks/series/types";
import Card from "../../components/card/card";
import Button from "../../components/button/button";
import Loader from "react-loader-spinner";

interface StateProps {
  character?: Character;
  loading: boolean;
  series: Serie[];
}

interface MatchParams {
  match: {
    params: {
      characterId: string;
    };
  };
}

interface RouterProps {
  history: History;
}

interface DispatchProps {
  getAllByCharacterRequest(characterId: number): void;
  getCharacter(characterId: number): void;
}

type Props = StateProps & RouterProps & DispatchProps & MatchParams;

const CharacterScreen: React.SFC<Props> = ({
  character,
  series,
  loading,
  history,
  match,
  getAllByCharacterRequest,
  getCharacter,
}) => {
  useEffect(() => {
    const characterId = parseInt(match.params.characterId);
    getCharacter(characterId);
    getAllByCharacterRequest(characterId);
  }, [getCharacter, getAllByCharacterRequest, match.params.characterId]);

  return (
    <div className="character-view">
      <div className="character-view__header">
        <Button
          value="Back"
          leftIcon={<i className="fa fa-caret-left"></i>}
          onClick={() => history.push("/")}
        />
      </div>
      {character && !loading ? (
        <div className="character-view__content">
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
        <Loader type="Bars" />
      )}
    </div>
  );
};

const mapStateToProps = (state: ApplicationState) => ({
  character: state.characters.characterSelected,
  series: state.series.data,
  loading: state.series.loading,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    { ...SeriesActions, getCharacter: CharacterActions.getRequest },
    dispatch
  );

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CharacterScreen)
);
