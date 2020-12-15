+++
title = "Forms"
+++

Making forms accessible is a simple process. Each form element should be associated with its instructions and errors, and everything should be accessible via the keyboard.

## Testing
1.  Identify each form element.
2.  Find all instructions associated with each element.
    *   **It is a failure if a form element isn’t programatically associated with _all_ instructions. This includes legends, labels, hint text and tooltips.**
    *   A common way of achieving this is using `fieldset` and `legend` tags. `Fieldset` is used to group a set of elements. `Legend` is the first child of a `fieldset` tag and provides context for those fields.
3.  Ensure all field elements are accessible via the keyboard.
    *   **If the form cannot be filled out with just a keyboard, this is a failure.**
4.  Check for title attributes
    *   Title attributes can be a substitute for labels.
    *   **If the title attributes provides all the related information it passes, if it provides extra information it fails.**
    *   Title attributes are not accessible via keyboard.
