import ChartJs from "chart.js/auto";
import { useRef, useEffect } from "react";

interface Data {
  label?: string;
  backgroundColor?: string[];
  data: number[];
}

interface Props {
  type: "line" | "pie";
  datasets: Data[];
  labels?: string[];
}

export const Chart = (props: Props) => {
  const { datasets, type, labels } = props;
  const ref = useRef<HTMLCanvasElement>(null);
  const chart = useRef<ChartJs | null>(null);

  useEffect(() => {
    if (chart.current == null) {
      return;
    }

    chart.current.update();
  }, [chart, datasets, labels]);

  useEffect(() => {
    if (ref.current == null) {
      return;
    }
    if (chart.current !== null) {
      return;
    }

    chart.current = new ChartJs(ref.current, {
      type,
      data: {
        datasets: datasets,
        labels,
      },
    });
  }, [ref, chart, datasets, type, labels]);

  return <canvas ref={ref} />;
};
