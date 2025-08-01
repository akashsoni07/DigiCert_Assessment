import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  FaFilm,
  FaCalendar,
  FaUser,
  FaUsers,
  FaGlobe,
  FaRocket,
  FaCar,
  FaDragon,
  FaStar,
} from "react-icons/fa";
import { useMovieDetails } from "../hooks/useMovieDetails";
import type { Character, Planet } from "../types/movie";
import LoadingPage from "../components/loader/LoadingPage";
import ErrorMessage from "../components/error/ErrorMessage";
import PageHeader from "../components/layout/PageHeader";
import DetailCard from "../components/card/DetailCard";
import StatCard from "../components/card/StatCard";
import EntityList from "../components/list/EntityList";
import EntityCard from "../components/card/EntityCard";
import ContentSection from "../components/common/ContentSection";

const MovieDetail: React.FC = () => {
  const { movieId } = useParams<{ movieId: string }>();
  const navigate = useNavigate();
  const { selectedMovie, characters, planets, loading, loadingDetails, error } =
    useMovieDetails(movieId);

  const handleBack = () => navigate("/");

  if (loading) return <LoadingPage message="Loading movie details..." />;
  if (error)
    return (
      <ErrorMessage
        message={error}
        title="Error Loading Movie"
        onRetry={handleBack}
      />
    );
  if (!selectedMovie) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Movie Not Found
          </h2>
          <button
            onClick={handleBack}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  const detailCards = [
    {
      icon: FaCalendar,
      label: "Release Date",
      value: new Date(selectedMovie.release_date).toLocaleDateString(),
      bg: "bg-blue-50",
      color: "text-blue-600",
    },
    {
      icon: FaUser,
      label: "Director",
      value: selectedMovie.director,
      bg: "bg-green-50",
      color: "text-green-600",
    },
    {
      icon: FaUser,
      label: "Producer",
      value: selectedMovie.producer,
      bg: "bg-purple-50",
      color: "text-purple-600",
    },
    {
      icon: FaStar,
      label: "Created",
      value: new Date(selectedMovie.created).toLocaleDateString(),
      bg: "bg-orange-50",
      color: "text-orange-600",
    },
  ];

  const statCards = [
    {
      icon: FaRocket,
      label: "Starships",
      value: selectedMovie.starships.length,
      color: "text-blue-600",
    },
    {
      icon: FaCar,
      label: "Vehicles",
      value: selectedMovie.vehicles.length,
      color: "text-green-600",
    },
    {
      icon: FaDragon,
      label: "Species",
      value: selectedMovie.species.length,
      color: "text-purple-600",
    },
  ];

  const renderCharacter = (character: Character, index: number) => (
    <EntityCard
      key={index}
      title={character.name}
      fields={[
        { label: "Height", value: `${character.height}cm` },
        { label: "Mass", value: `${character.mass}kg` },
        { label: "Birth Year", value: character.birth_year },
        { label: "Gender", value: character.gender },
      ]}
    />
  );

  const renderPlanet = (planet: Planet, index: number) => (
    <EntityCard
      key={index}
      title={planet.name}
      fields={[
        { label: "Climate", value: planet.climate },
        { label: "Terrain", value: planet.terrain },
        { label: "Population", value: planet.population },
        { label: "Diameter", value: `${planet.diameter}km` },
      ]}
    />
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        <PageHeader
          title={selectedMovie.title}
          subtitle={`Episode ${selectedMovie.episode_id}`}
          icon={FaFilm}
          onBack={handleBack}
          backLabel="Back to Movies"
        />

        <ContentSection title="Opening Crawl">
          <p className="text-gray-700 leading-relaxed italic">
            {selectedMovie.opening_crawl}
          </p>
        </ContentSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {detailCards.map((card, index) => (
            <DetailCard
              key={index}
              icon={card.icon}
              label={card.label}
              value={card.value}
              bgColor={card.bg}
              iconColor={card.color}
            />
          ))}
        </div>

        <EntityList
          title="Characters"
          icon={FaUsers}
          items={characters}
          loading={loadingDetails}
          renderItem={renderCharacter}
          iconColor="text-blue-600"
          emptyMessage="No characters found"
        />

        <EntityList
          title="Planets"
          icon={FaGlobe}
          items={planets}
          loading={loadingDetails}
          renderItem={renderPlanet}
          iconColor="text-green-600"
          emptyMessage="No planets found"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {statCards.map((stat, index) => (
            <StatCard
              key={index}
              icon={stat.icon}
              label={stat.label}
              value={stat.value}
              iconColor={stat.color}
              valueColor={stat.color}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
