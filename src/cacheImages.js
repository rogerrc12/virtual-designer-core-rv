export const cacheImages = async (srcArray, setIsloading) => {
  const promises = await srcArray.map((src) => {
    return new Promise((resolve, reject) => {
      const img = new Image();

      img.src = src;
      img.onload = resolve(src);
      img.onerror = reject();
    });
  });

  await Promise.all(promises);
  setIsloading(false);
};
