import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type PokemonDetail = {
  id: number;
  name: string;
  height: number;
  weight: number;
  base_experience: number;
  sprites: {
    front_default: string | null;
    front_shiny: string | null;
  };
  types: Array<{
    type: {
      name: string;
    };
  }>;
  abilities: Array<{
    ability: {
      name: string;
    };
  }>;
  stats: Array<{
    base_stat: number;
    stat: {
      name: string;
    };
  }>;
};

async function getPokemonDetail(name: string): Promise<PokemonDetail> {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`, {
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    notFound();
  }

  return (await response.json()) as PokemonDetail;
}

export default async function PokemonDetailPage({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;
  const pokemon = await getPokemonDetail(name);

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold capitalize">{pokemon.name}</h1>
          <p className="text-gray-500">Thong tin chi tiet Pokemon</p>
        </div>
        <Link href="/pokemon" className="text-blue-600 hover:underline">
          Quay lai danh sach
        </Link>
      </div>

      <Card className="overflow-hidden">
        <CardHeader>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <div className="w-24 h-24 rounded-full bg-gray-50 flex items-center justify-center">
                {pokemon.sprites.front_default ? (
                  <img
                    src={pokemon.sprites.front_default}
                    alt={`Pokemon ${pokemon.name}`}
                    className="w-20 h-20"
                  />
                ) : (
                  <span className="text-xs text-gray-500">No image</span>
                )}
              </div>
              <div>
                <CardTitle className="text-2xl capitalize">
                  {pokemon.name}
                </CardTitle>
                <CardDescription>
                  #{pokemon.id} • Cao: {pokemon.height / 10} m • Nang:{" "}
                  {pokemon.weight / 10} kg
                </CardDescription>
              </div>
            </div>
            <div className="flex items-center gap-3">
              {pokemon.sprites.front_shiny ? (
                <img
                  src={pokemon.sprites.front_shiny}
                  alt={`Pokemon ${pokemon.name} shiny`}
                  className="w-16 h-16"
                />
              ) : null}
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <p className="text-sm font-medium text-gray-500 mb-2">He</p>
            <div className="flex flex-wrap gap-2">
              {pokemon.types.map((typeInfo) => (
                <Badge key={typeInfo.type.name} variant="secondary">
                  {typeInfo.type.name}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-medium text-gray-500 mb-2">Kha nang</p>
            <div className="flex flex-wrap gap-2">
              {pokemon.abilities.map((abilityInfo) => (
                <Badge key={abilityInfo.ability.name} variant="outline">
                  {abilityInfo.ability.name}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-medium text-gray-500 mb-2">Chi so</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {pokemon.stats.map((statInfo) => (
                <div
                  key={statInfo.stat.name}
                  className="flex items-center justify-between rounded-lg border border-gray-100 bg-gray-50 px-3 py-2"
                >
                  <span className="text-sm capitalize text-gray-600">
                    {statInfo.stat.name.replace("-", " ")}
                  </span>
                  <span className="text-sm font-semibold">
                    {statInfo.base_stat}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
            <span>Kinh nghiem: {pokemon.base_experience}</span>
            <span>Chieu cao: {pokemon.height / 10} m</span>
            <span>Can nang: {pokemon.weight / 10} kg</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
