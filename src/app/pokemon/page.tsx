import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type PokemonListItem = {
  name: string;
  url: string;
};

type PokemonListResponse = {
  results: PokemonListItem[];
};

type PokemonDetail = {
  id: number;
  name: string;
  height: number;
  weight: number;
  sprites: {
    front_default: string | null;
  };
  types: Array<{
    type: {
      name: string;
    };
  }>;
};

async function getPokemonList(): Promise<PokemonDetail[]> {
  const listResponse = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=12",
    {
      next: { revalidate: 3600 },
    },
  );

  if (!listResponse.ok) {
    throw new Error("Failed to fetch Pokemon list");
  }

  const listData = (await listResponse.json()) as PokemonListResponse;

  const pokemonDetails = await Promise.all(
    listData.results.map(async (item) => {
      const detailResponse = await fetch(item.url, {
        next: { revalidate: 3600 },
      });

      if (!detailResponse.ok) {
        throw new Error(`Failed to fetch Pokemon ${item.name}`);
      }

      return (await detailResponse.json()) as PokemonDetail;
    }),
  );

  return pokemonDetails.sort((a, b) => a.id - b.id);
}

export default async function PokemonPage() {
  const pokemon = await getPokemonList();

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-2">Pokemon</h1>
      <p className="text-gray-500 mb-6">Danh sach Pokemon lay tu PokeAPI</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {pokemon.map((item) => (
          <Link key={item.id} href={`/pokemon/${item.name}`}>
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center">
                    {item.sprites.front_default ? (
                      <img
                        src={item.sprites.front_default}
                        alt={`Pokemon ${item.name}`}
                        className="w-14 h-14"
                      />
                    ) : (
                      <span className="text-xs text-gray-500">No image</span>
                    )}
                  </div>
                  <div>
                    <CardTitle className="capitalize">{item.name}</CardTitle>
                    <CardDescription>
                      #{item.id} • Cao: {item.height / 10} m • Nang:{" "}
                      {item.weight / 10} kg
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {item.types.map((typeInfo) => (
                    <Badge key={typeInfo.type.name} variant="secondary">
                      {typeInfo.type.name}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
