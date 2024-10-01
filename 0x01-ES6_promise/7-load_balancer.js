export default function loadBalancer(chinaDownload, USDownload) {
  const pr1 = chinaDownload;
  const pr2 = USDownload;

  return Promise.race([pr1, pr2])
    .then((valu) => valu);
}
