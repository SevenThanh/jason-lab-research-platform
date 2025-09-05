// Edit your news here - just add, remove, or change the lines below, NO CSS or layout touched.
const newsItems = [
  "March 10th, 2025 - Prof. Rabinovitch attends The 56th Lunar and Planetary Science Conference (LPSC) in the Woodlands, Texas, and presents a poster on the VATMOS-SR Mission Concept.",
  "March 1st, 2025 - The Rabinovitch Research Group, in collaboration with the Computational ThermoFluids Lab (CTFLab) at Cornell University, is excited to start working on the ONR-funded project \"Advancing understanding of and predictive modeling capabilities for high-speed shock-induced droplet aerobreakup and surface damage.\" 4-year performance.",
  "Dec. 17th, 2024 - The paper \"Sensitivity Analysis and Validation of a Computational Framework for Supersonic Parachute Inflation Dynamics\" published in AIAA Journal.",
  "Nov. 27th, 2024 - The publication \"Experimental and numerical investigation of inertial particles in underexpanded jets\" in JFM, vol.1000! Multi-year collaboration between Stevens, U. of Michigan, and Johns Hopkins University.",
];

export default function RecentNews() {
  return (
    <>
      <div className="text-xl font-bold mb-4">Recent News</div>
      <div className="space-y-4">
        {newsItems.map((item, idx) => (
          <div key={idx} className="text-gray-800">
            {item}
          </div>
        ))}
      </div>
    </>
  );
}
