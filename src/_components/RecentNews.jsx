export default function RecentNews() {
  return (
    <section className="bg-gray-200 rounded-lg p-6 flex-1 min-w-[300px]">
      <h2 className="text-xl font-semibold mb-4">Recent News</h2>
      <ul className="space-y-4 text-gray-800 text-sm">
        <li>
          <strong>March 10th, 2025</strong> - Prof. Rabinovitch attends The 56th Lunar and Planetary Science Conference (LPSC) in the Woodlands, Texas, and presents a poster on the <a href="#" className="text-blue-700 underline">VATMOS-SR Mission Concept</a>.
        </li>
        <li>
          <strong>March 1st, 2025</strong> - The Rabinovitch Research Group, in collaboration with the <a href="#" className="text-blue-700 underline">Computational ThermoFluids Lab (CTFLab)</a> at Cornell University, is excited to start working on the ONR-funded project "Advancing understanding of and predictive modeling capabilities for high-speed shock-induced droplet aerobreakup and surface damage." 4-year performance.
        </li>
        <li>
          <strong>Dec. 17th, 2024</strong> - The paper <a href="#" className="text-blue-700 underline">"Sensitivity Analysis and Validation of a Computational Framework for Supersonic Parachute Inflation Dynamics"</a> published in AIAA Journal.
        </li>
        <li>
          <strong>Nov. 27th, 2024</strong> - The publication <a href="#" className="text-blue-700 underline">"Experimental and numerical investigation of inertial particles in underexpanded jets"</a> in JFM, vol.1000! Multi-year collaboration between Stevens, U. of Michigan, and Johns Hopkins University.
        </li>
      </ul>
    </section>
  );
}
