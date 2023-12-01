// import glob from 'glob';
// import path from 'path';

// // Define the pattern to match route files
// const pattern: string = 'src/plugins/**/*routes.ts';
// let routeModule:any

// // Use glob to find route files
// (async () => {
//   try {
//     // const files: string[] = await new Promise<string[]>((resolve, reject) => {
//     //     glob(pattern,(err: any, files: string[]) => {
//     //       if (err) {
//     //         reject(err);
//     //       } else {
//     //         resolve(files);
//     //       }
//     //     });
//     //   });

//     const files: any = glob.stream(fileURLToPath(pattern), {
//         ignore,absolute: true,
//         markDirectories: true,
//         onlyFiles: false,
//     })

//     console.log('Importing route files dynamically...');
//     for (const file of files) {
//       // Dynamically import the route file using import()
//       try {
//         routeModule = await import(path.resolve(__dirname, file));
//         // Use the imported module as needed
//         console.log(`Imported route file: ${file}`);
//         // Example: Call a function from the imported module
//         // routeModule.someFunction();
//       } catch (error) {
//         console.error(`Error importing route file ${file}:`, error);
//       }
//     }
//   } catch (error) {
//     console.error('Error finding files:', error);
//   }
// })();

// export default routeModule