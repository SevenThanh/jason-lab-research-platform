// Edit your publications here just add, remove, or change in this list only.
const pubs = [
  "As'ad, F.; Avery, P.; Farhat, C.; Rabinovitch, J.; ... (2024). Sensitivity Analysis and Validation of a Computational Framework ... https://doi.org/10.2514/1.j064791",
  "Patel, M.; Rubio, J. S.; Shekhtman, D.; ... (2024). Experimental and numerical investigation ... https://doi.org/10.1017/jfm.2024.1014",
  "Mitchell, K. L.; Rabinovitch, J.; ... (2024). A Proposed Model ... https://doi.org/10.1029/2023JE007977",
  "Rabinovitch, J.; Santana, S. A.; ... (2023). Observed High-Altitude Surface Erosion ... http://dx.doi.org/10.2514/1.a35748",
  "Gorman, M. T.; Rubio, J. S.; ... (2023). Scaling laws of plume-induced granular cratering ... https://doi.org/10.1093/pnasnexus/pgad300",
];

export default function RecentPubs() {
  return (
    <>
      <div className="text-xl font-bold mb-4">Recent Publications</div>
      <div className="space-y-4">
        {pubs.map((pub, idx) => (
          <div key={idx} className="text-gray-800">
            {pub}
          </div>
        ))}
      </div>
    </>
  );
}
