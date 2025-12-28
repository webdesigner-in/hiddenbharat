import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export default function SearchBar() {
  return (
    <section className="mx-auto mt-16 max-w-5xl px-4">
      <div className="rounded-2xl border bg-card p-6 shadow-sm">
        {/* Label */}
        <p className="mb-4 text-sm font-medium text-muted-foreground">
          Plan your next journey
        </p>

        {/* Sentence-style search */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center">
          <span className="text-base text-foreground">
            I want to explore
          </span>

          {/* What */}
          <Select>
            <SelectTrigger className="h-12 w-full md:w-55">
              <SelectValue placeholder="places like…" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="temples">Temples & Heritage</SelectItem>
              <SelectItem value="villages">Villages & Culture</SelectItem>
              <SelectItem value="mountains">Mountains & Trails</SelectItem>
              <SelectItem value="coastal">Beaches & Coast</SelectItem>
              <SelectItem value="nature">Nature & Forests</SelectItem>
            </SelectContent>
          </Select>

          <span className="hidden md:inline text-base text-foreground">
            in
          </span>

          {/* Season */}
          <Select>
            <SelectTrigger className="h-12 w-full md:w-40">
              <SelectValue placeholder="season" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="winter">Winter</SelectItem>
              <SelectItem value="summer">Summer</SelectItem>
              <SelectItem value="monsoon">Monsoon</SelectItem>
              <SelectItem value="spring">Spring</SelectItem>
            </SelectContent>
          </Select>

          <span className="hidden md:inline text-base text-foreground">
            for
          </span>

          {/* Duration */}
          <Select>
            <SelectTrigger className="h-12 w-full md:w-37.5">
              <SelectValue placeholder="duration" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2-3">2–3 days</SelectItem>
              <SelectItem value="3-4">3–4 days</SelectItem>
              <SelectItem value="5-7">5–7 days</SelectItem>
              <SelectItem value="7+">7+ days</SelectItem>
            </SelectContent>
          </Select>

          {/* CTA */}
          <Button
            size="lg"
            className="mt-2 w-full md:mt-0 md:ml-auto md:w-auto"
          >
            Explore
          </Button>
        </div>
      </div>
    </section>
  );
}
