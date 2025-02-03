To fix this, ensure you access the data only after the promise resolves or async operation completes.  Here's how to use async/await:

```javascript
async function fetchData(docRef) {
  try {
    const doc = await docRef.get();
    if (doc.exists) {
      const data = doc.data();
      console.log("Data:", data.property); // Access property after data is loaded
    } else {
      console.log("No such document!");
    }
  } catch (error) {
    console.error("Error fetching document:", error);
  }
}
```
Alternatively, use `.then()` to handle promises:

```javascript
docRef.get().then((doc) => {
  if (doc.exists) {
    const data = doc.data();
    console.log("Data:", data.property); // Access property after data is loaded
  } else {
    console.log("No such document!");
  }
}).catch((error) => {
  console.error("Error fetching document:", error);
});
```