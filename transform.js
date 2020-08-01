
// ES6 import right from node modules
// Parcel js will take care of bundling this for us so it's web ready.
import md5 from 'md5'

export function transform() {
    document.getElementById('md5-output').value = md5(document.getElementById('md5-input').value);
}