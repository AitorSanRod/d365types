declare namespace D365 {
    interface ExecutionContext {
        /**
         * Obtiene el contexto de un formulario.
         * 
         * @returns Contexto del formulario.
         */
        getFormContext<T = any>(): FormContext<T>;
    }

    interface FormContext<T = any> {
        getAttribute<T = any>(): Attribute<T>;
        getControl<T = any>(): Control<T>;
    }

    interface Attribute<T = any> {
        /**
         * Ejecuta una función al cambiar el valor de un campo.
         */
        addOnChange(funcion: () => void): () => any;

        /**
         * Ejecuta el trigger OnChange de un campo.
         */
        fireOnChange(): void;

        /**
         * Devuelve el tipo de campo en formato string.
         * 
         * @template string
         */
        getAttributeType(): string

        /**
         * Devuelve el formato de un campo.
         * 
         * @template string 
         */
        getFormat(): string | null;

        /**
         * Devuelve un valor que representa el valor establecido para columnas Sí/No, Opción o Opciones cuando se abre el formulario.
         */
        getInitialValue(): any;

        /**
         * Devuelve un valor booleano que indica si hay cambios sin guardar en el valor de la columna. 
         * Un cambio sin guardar para un valor de columna significa que el valor del cliente es diferente del último valor confirmado conocido recuperado de 
         * Dataverse por el cliente desde el runtime.
         * 
         * @template boolean
         */
        getIsDirty(): boolean;

        /**
         * Devuelve un valor booleano que indica si la búsqueda representa una búsqueda de tipo partylist
         * 
         * @template boolean
         */
        getIsPartyList(): boolean;

        /**
         * Devuelve un número que indica el valor máximo permitido para una columna.
         * 
         * @template number
         */
        getMax(): number;

        /**
         * Devuelve un número que indica la longitud máxima de una cadena o columna.
         * 
         * @template number
         */
        getMaxLength(): number;

        /**
         * Devuelve un número que indica el valor mínimo permitido para una columna.
         * 
         * @template number
         */
        getMin(): number;

        /**
         * Devuelve un string que representa el nombre lógico del atributo.
         * 
         * @template string
         */
        getName(): string;

        /**
         * Devuelve un objeto de opción con el valor que coincide con el argumento (etiqueta o valor de enumeración) pasado al método.
         */
        getOption(value: string): object;

        /**
         * Devuelve un array de objetos de opción que representan opciones válidas para una columna.
         */
        getOptions(): Array<T>

        /**
         * TODO
         */
        getParent(): object

        /**
         * Devuelve el número de dígitos permitidos a la derecha de la coma decimal.
         */
        getPrecision(): number;

        /**
         * Indica si un valor para la columna es obligatorio o recomendado.
         */
        getRequiredLevel(): string;

        /**
         * Devuelve el objeto de opción o una matriz de objetos de opción seleccionados en una columna choice o choices respectivamente.
         */
        getSelectedOption(): object | Array<T>;

        /**
         * Devuelve una cadena que indica cuándo se enviarán los datos de la columna a la hora de guardar el registro.
         * 
         * @returns siempre | nunca | modificado
         */
        getSubmitMode(): string

        /**
         * Devuelve un valor de cadena del texto para la opción actualmente seleccionada para una columna choice o choices.
         */
        getText(): string;

        /**
         * Devuelve un objeto con tres propiedades booleanas correspondientes a privilegios que indican si el usuario puede crear, 
         * leer o actualizar los valores de los datos de una columna. Esta funcionalidad se usa cuando la seguridad de nivel de campo 
         * modificar los privilegios de un usuario para una columna determinada.
         */
        getUserPrivilege(): object

        /**
         * Obtiene un atributo del formulario.
         * 
         * @returns El valor del atributo especificado.
         */
        getValue(): FieldValue;

        /**
         * Devuelve un valor booleano para indicar si el valor de una columna es válido antes de guardar el formulario.
         */
        isValid(): boolean;

        /**
         * Elimina una función de la controlador de eventos OnChange para una columna.
         * 
         * @param funcion 
         */
        removeOnChange(funcion: () => void): () => any;

        /**
         * Establece un valor para una columna para determinar si es válida o no válida con un mensaje.
         * 
         * @param bool boolean
         * @param message string
         */
        setIsValid(bool: boolean, message: string): void;

        /**
         * Establece el número de dígitos permitidos a la derecha de la coma decimal.
         * @param value 
         */
        setPrecision(value: number): void;

        /**
         * Establece si se requieren o recomiendan datos para la columna antes de que se pueda guardar el registro.
         * 
         * @param requirementLevel "none" | "required" | "recommended"
         */
        setRequiredLevel(requirementLevel: string): void;

        /**
         * Establece si se enviarán los datos de la columna a la hora de guardar el registro.
         * 
         * @param mode string
         */
        setSubmitMode(mode: string): void;

        /**
         * Incluye un valor en el campo indicado.
         * 
         * @param value Información que se va sustituir el valor del campo.
         * @template FieldValue string | null | undefined | object | Array;
         */
        setValue(value: FieldValue): void;
    }

    interface Control<T = any> {
        /**
         * Agrega filtros a los resultados mostrados en la búsqueda. Cada filtro se combinará con cualquier filtro agregado anteriormente como una condición AND.
         * 
         * @param xmlFilter String con el filtro XML que queremos hacer en un lookUp.
         * @param entityLogicalName String (opcional). Si se establece, el filtro solo se aplica a ese tipo de tabla. De lo contrario, se aplica a todos los tipos de tablas devueltas.
         */
        addCustomFilter(xmlFilter: string, entityLogicalName: string): void;

        /**
         * Agrega una vista nueva para el cuadro de diálogo de búsqueda.
         * 
         * @param viewId String. GUID de una vista. Por ejemplo “00000000-0000-0000-0000-000000000001".
         * @param entityName String. Nombre de la tabla.
         * @param viewDisplayName String. Nombre de la vista.
         * @param fetchXml String. Consulta XML de la vista.
         * @param layoutXml String. El XML que define el diseño de la vista.
         * @param isDefault Boolean. Indica si la vista debe ser la vista predeterminada.
         */
        addCustomView(viewId: string, entityName: string, viewDisplayName: string, fetchXml: string, layoutXml: string, isDefault: boolean): void;

        /**
         * Muestra una notificación de error o de recomendación para un control, y permite especificar acciones para ejecutar basadas en la notificación.
         * 
         * @param notification messages: Array<string> | notificationLevel: string | uniqueId: string | actions?: Array<object>
         */
        addNotification(notification: INotificacion): boolean;

        /**
         * Ejecuta una funcion al hacer clic en el calor de un lookUp.
         *  
         */
        addOnLookupTagClick(funcion: () => any): any;

        /**
         * TODO
         */
        addOnOutputChange(funcion: () => any): any;

        /**
         * TODO
         */
        addOnPostSearch(funcion: () => any): any;

        /**
         * TODO
         */
        addOnResultOpened(funcion: () => any): any;

        /**
         * TODO
         */
        addOnSelection(funcion: () => any): any;

        /**
         * Agrega una opción a un control.
         * 
         * @param option Object. La opción a agregar.
         * @param index Number. La posición en la que aparecerá el nuevo valor. Si no se añade, se agrega al final.
         */
        addOption(option: object, index?: number): void;

        /**
         * Aplica cambios a búsquedas basadas en valores actuales mientras el usuario está a punto de ver los resultados de la búsqueda.
         * 
         * @param funcion 
         */
        addPreSearch(funcion: () => any): any;

        /**
         * Eliminar un mensaje que ya se muestra para un control.
         * 
         * @param uniqueId String. Si no se establece parametro, quita la notificación actual.
         */
        clearNotification(uniqueId?: string): boolean;

        /**
         * Borra todas las opciones de un control.
         */
        clearOptions(): void;

        /**
         * Devuelve la columna a la que está asignada el control.
         * 
         * @returns object: Objecto con los datos de la columna del control.
         */
        getAttribute(): object;

        /**
         * Devuelve la ventana de contenido que representa un IFRAME o un recurso web.
         */
        getContentWindow(): Promise;

        /**
         * Obtiene un control en el formulario.
         * 
         * @param arg String | number
         * @returns Object | Array<object> | null
         */
        getControl(arg?: string): object | Array<object> | null;

        /**
         * Devuelve un valor que categoriza los controles.
         */
        getControlType(): string;

        /**
         * Devuelve el valor del parámetro de la cadena de consulta de datos pasado a un recurso web de Silverlight.
         */
        getData(): string;
    }

    interface FieldValue {
        value: IFieldValue
    }

    type IFieldValue = string | number | boolean | object | Array<any> | null;

    type INotificacion = {
        messages: Array<string>,
        notificationLevel: string,
        uniqueId: string,
        actions?: Array<object>
    }
}
