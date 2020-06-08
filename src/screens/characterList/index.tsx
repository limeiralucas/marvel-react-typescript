import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { History } from "history";
import Loader from "react-loader-spinner";

import { Character } from "../../store/ducks/characters/types";
import Card from "../../components/card/card";
import { ApplicationState } from "../../store";

import TextInput from "../../components/textInput/textInput";
import * as CharactersActions from "../../store/ducks/characters/actions";

import "./index.css";
import { Dispatch, bindActionCreators } from "redux";

interface StateProps {
  characters: Character[];
  loading: boolean;
}

interface RouterProps {
  history: History;
}

interface DispatchProps {
  getAllRequest(): void;
  searchRequest(query: string): void;
}

type Props = StateProps & RouterProps & DispatchProps;

const CharacterListScreen: React.SFC<Props> = ({
  characters,
  history,
  loading,
  getAllRequest,
  searchRequest,
}) => {
  useEffect(() => {
    getAllRequest();
  }, [getAllRequest]);

  return (
    <div className="character-list">
      <div className="character-list__header">
        <div className="character-list__title">Marvel's Characters</div>
        <div className="character-list__search-container">
          <TextInput
            placeholder="Search character"
            onChange={(e) => searchRequest(e.target.value)}
          />
          <i className="fa fa-search"></i>
        </div>
      </div>
      <div className="character-list__grid">
        {!loading ? (
          characters.map((character) => (
            <Card
              key={character.id}
              imageUrl={`${character.thumbnail.path}.${character.thumbnail.extension}`}
              text={character.name}
              onClick={() => history.push(`/character/${character.id}`)}
            />
          ))
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

CharacterListScreen.defaultProps = {
  characters: [],
};

const mapStateToProps = (state: ApplicationState) => ({
  characters: state.characters.data,
  loading: state.characters.loading,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(CharactersActions, dispatch);

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CharacterListScreen)
);
