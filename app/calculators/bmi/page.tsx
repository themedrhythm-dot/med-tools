"use client";

import { useState } from "react";

type HeightUnit = "cm" | "m" | "in" | "ft";
type WeightUnit = "kg" | "lb";

export default function BMIPage() {
  const [height, setHeight] = useState("");
  const [heightUnit, setHeightUnit] = useState<HeightUnit>("cm");

  const [weight, setWeight] = useState("");
  const [weightUnit, setWeightUnit] = useState<WeightUnit>("kg");

  const [bmi, setBmi] = useState<number | null>(null);

  function calculateBMI() {
    const h = Number(height);
    const w = Number(weight);

    if (!h || !w || h <= 0 || w <= 0) {
      setBmi(null);
      return;
    }

    // Convert height to metres
    let heightInMeters = h;

    if (heightUnit === "cm") {
      heightInMeters = h / 100;
    } else if (heightUnit === "in") {
      heightInMeters = h * 0.0254;
    } else if (heightUnit === "ft") {
      heightInMeters = h * 0.3048;
    }

    // Convert weight to kilograms
    let weightInKg = w;

    if (weightUnit === "lb") {
      weightInKg = w * 0.45359237;
    }

    const result = weightInKg / (heightInMeters * heightInMeters);

    setBmi(Number(result.toFixed(1)));
  }

  function getCategory(value: number) {
    if (value < 18.5) return "Underweight";
    if (value < 25) return "Normal";
    if (value < 30) return "Overweight";
    return "Obesity";
  }

  return (
    <main className="min-h-screen bg-[#f7f9fc] text-slate-950">
      <div className="mx-auto max-w-3xl px-6 py-12 sm:py-20">

        {/* Header */}
        <div className="mb-10">
          <a
            href="/"
            className="text-sm font-medium text-slate-400 transition hover:text-slate-700"
          >
            ← med.tools
          </a>

          <div className="mt-10">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
              Medical Calculator
            </p>

            <h1 className="text-4xl font-bold tracking-[-0.03em] sm:text-5xl">
              BMI Calculator
            </h1>

            <p className="mt-3 max-w-xl text-base leading-7 text-slate-500">
              Calculate body mass index from height and weight.
            </p>
          </div>
        </div>

        {/* Calculator */}
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">

          <div className="grid gap-6 sm:grid-cols-2">

            {/* Height */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Height
              </label>

              <div className="flex overflow-hidden rounded-xl border border-slate-200 bg-white focus-within:border-slate-400">

                <input
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  placeholder="175"
                  className="min-w-0 flex-1 px-4 py-3.5 text-base outline-none placeholder:text-slate-300"
                />

                <select
                  value={heightUnit}
                  onChange={(e) =>
                    setHeightUnit(e.target.value as HeightUnit)
                  }
                  className="border-l border-slate-200 bg-slate-50 px-4 text-sm font-medium text-slate-500 outline-none"
                >
                  <option value="cm">cm</option>
                  <option value="m">m</option>
                  <option value="in">in</option>
                  <option value="ft">ft</option>
                </select>

              </div>
            </div>

            {/* Weight */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Weight
              </label>

              <div className="flex overflow-hidden rounded-xl border border-slate-200 bg-white focus-within:border-slate-400">

                <input
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  placeholder="70"
                  className="min-w-0 flex-1 px-4 py-3.5 text-base outline-none placeholder:text-slate-300"
                />

                <select
                  value={weightUnit}
                  onChange={(e) =>
                    setWeightUnit(e.target.value as WeightUnit)
                  }
                  className="border-l border-slate-200 bg-slate-50 px-4 text-sm font-medium text-slate-500 outline-none"
                >
                  <option value="kg">kg</option>
                  <option value="lb">lb</option>
                </select>

              </div>
            </div>

          </div>

          <button
            onClick={calculateBMI}
            className="mt-7 w-full rounded-xl bg-slate-950 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Calculate BMI
          </button>

          {/* Result */}
          {bmi !== null && (
            <div className="mt-8 border-t border-slate-100 pt-8">

              <div className="text-center">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
                  Your BMI
                </p>

                <div className="mt-2 text-6xl font-bold tracking-[-0.04em]">
                  {bmi}
                </div>

                <p className="mt-2 text-sm font-semibold text-slate-600">
                  {getCategory(bmi)}
                </p>
              </div>

              <div className="mt-8 grid grid-cols-4 overflow-hidden rounded-xl border border-slate-200 text-center text-xs">

                <div className="border-r border-slate-200 px-2 py-3">
                  <div className="font-semibold text-slate-700">
                    &lt; 18.5
                  </div>
                  <div className="mt-1 text-slate-400">
                    Underweight
                  </div>
                </div>

                <div className="border-r border-slate-200 px-2 py-3">
                  <div className="font-semibold text-slate-700">
                    18.5–24.9
                  </div>
                  <div className="mt-1 text-slate-400">
                    Normal
                  </div>
                </div>

                <div className="border-r border-slate-200 px-2 py-3">
                  <div className="font-semibold text-slate-700">
                    25–29.9
                  </div>
                  <div className="mt-1 text-slate-400">
                    Overweight
                  </div>
                </div>

                <div className="px-2 py-3">
                  <div className="font-semibold text-slate-700">
                    ≥ 30
                  </div>
                  <div className="mt-1 text-slate-400">
                    Obesity
                  </div>
                </div>

              </div>
            </div>
          )}
        </div>

        {/* Formula */}
        <section className="mt-12">
          <h2 className="text-lg font-bold tracking-tight">
            Formula
          </h2>

          <p className="mt-3 text-sm leading-7 text-slate-500">
            BMI is calculated by dividing body weight in kilograms by
            height in metres squared.
          </p>

          <div className="mt-5 rounded-2xl border border-slate-200 bg-white px-5 py-4 font-mono text-sm text-slate-600">
            BMI = weight (kg) ÷ height² (m)
          </div>
        </section>

      </div>
    </main>
  );
}