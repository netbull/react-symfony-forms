import _ from 'lodash'

export function isFormDirty(form) {
    let isDirty = false;

    _.each(form.fields, function (field) {
        if ( field.options.originalValue ) {
            isDirty = true;
        }
    });

    return isDirty;
}