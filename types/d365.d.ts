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
        getContentWindow(): Promise<any>;

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

        /**
         * Devuelve el valor de identificador de la vista predeterminada.
         */
        getDefaultView(): string;

        /**
         * Devuelve si el control está deshabilitado.
         */
        getDisabled(): boolean;

        /**
         * Obtiene los tipos de tablas permitidos en el control de búsqueda.
         * 
         * @returns Array<string> con los nombres lógicos de las tablas permitidas en este control.
         */
        getEntityTypes(): Array<string>;

        /**
         * Devuelve la dirección URL predeterminada que un control de IFRAME está configurado para mostrar.
         * 
         * @returns String. Dirección URL inicial.
         */
        getInitialUrl(): string;

        /**
         * Devuelve la etiqueta del control.
         * 
         * @returns String: La etiqeuta del control.
         */
        getLabel(): string;

        /**
         * Devuelve el nombre asignado al control.
         */
        getName(): string

        /**
         * Devuelve el objeto del formulario que representa un IFRAME o un recurso web.
         * 
         * @returns Iframe: https://developer.mozilla.org/es/docs/Web/HTML/Element/iframe
         */
        getObject(): Object;

        /**
         * Devuelve una matriz de objetos de opción que representan opciones válidas disponibles para un control, 
         * incluida una opción en blanco y excluida cualquier opción que se haya quitado del control mediante removeOption.
         * 
         * @returns Devuelve un array de objetos con los atributos text: string y value: number.
         */
        getOptions(): Array<IOptionSet>;

        /**
         * Devuelve un diccionario de las propiedades de salida del control.
         */
        getOutputs(): any;

        /**
         * Devuelve una referencia al objeto de sección que contiene el control.
         */
        getParent(): object;

        /**
         * Obtiene el texto usado como criterio de búsqueda para el control de administración de knowledge base.
         */
        getSearchQuery(): string;

        /**
         * Use este método para obtener el resultado seleccionado actualmente del control de búsqueda. 
         * El resultado seleccionado actualmente también representa el resultado que está abierto actualmente.
         */
        getSelectedResults(): any;

        /**
         * Obtenga si un control de fecha muestra la parte de hora de la fecha.
         */
        getShowTime(): boolean;

        /**
         * TODO
         */
        getSrc(): string;

        /**
         * Devuelve el estado del control de temporizador.
         */
        getState(): number;

        /**
         * Obtenga el recuento de resultados que se encuentran en el control de búsqueda.
         */
        getTotalResultCount(): number;

        /**
         * Obtiene el valor más reciente en un control cuando el usuario escribe caracteres en una columna de texto o número específica. 
         * 
         * El método getValue (Control) es diferente del método getValue (Attributes) de la columna porque el método de control recupera el valor del control cuando 
         * el usuario escribe en el control en lugar de en la método getValue de la columna que recupera el valor después de que el usuario confirma (guarda) la columna.
         */
        getValue(): string;

        /**
         * Devuelve un valor que indica si el control está visible actualmente.
         */
        getVisible(): boolean;

        /**
         * Abre un resultado de la búsqueda en el control de búsqueda especificando el número de resultado.
         * 
         * @param resultNumber Number. Obligatorio. Valor numérico que especifica el número de resultado que se abrirá. El número de resultado empieza en 1.
         * @param mode String. Inline | Popout.
         * 
         * @returns  Estado de apertura del resultado de la búsqueda especificado. 
         * Devuelve 1 si es correcto; 0 si es error. El método devolverá -1 si el valor resultNumber especificado no está presente o si el valor mode especificado no es válido.
         */
        openSearchResult(resultNumber: number, mode?: string): boolean;

        /**
         * Actualiza los datos visualizados en un control timelinewall y timer.
         */
        refresh(): void;

        /**
         * Quita un controlador de eventos del evento OnLookupTagClick.
         */
        removeOnLookupTagClick(funcion: () => void): void;

        /**
         * Quita un controlador de eventos del evento OnOutputChange.
         */
        removeOnOutputChange(funcion: () => void): void;

        /**
         * Quita un controlador de eventos del evento PostSearch.
         */
        removeOnPostSearch(funcion: () => void): void;

        /**
         * Quita un controlador de eventos del evento OnResultOpened.
         */
        removeOnResultOpened(funcion: () => void): void;

        /**
         * Quita un controlador de eventos del evento OnSelection.
         */
        removeOnSelection(funcion: () => void): void;

        /**
         * Quita una opción de un control.
         * 
         * @param value Number. Valor de la opoción que desea quitar.
         */
        removeOption(value: number): void;

        /**
         * Quita las funciones del controlador de eventos que se han establecido anteriormente para el evento PreSearch.
         */
        removePreSearch(funcion: () => void): void;

        /**
         * Establecer el valor del parámetro de la cadena de consulta de datos pasado a un recurso web de Silverlight.
         * 
         * @param string 
         */
        setData(string: string): void;

        /**
         * Establece la vista predeterminada para el cuadro de diálogo de control de búsqueda.
         * 
         * @param viewId String. GUID de la vistas que establece como principal.
         */
        setDefaultView(viewId: string): void;

        /**
         * Establece si el control está deshabilitado.
         * 
         * @param bool
         */
        setDisabled(bool: boolean): void;

        /**
         * Establece los tipos de tablas permitidos en el control de búsqueda.
         * 
         * @param entities Array de strings.
         */
        setEntityTypes(entities: Array<string>): void;

        /**
         * Establece el enfoque en el control.
         */
        setFocus(): void;

        /**
         * Establece la etiquea del control.
         * 
         * @param label String. Nueva etiqueta para el control.
         */
        setLabel(label: string): void;

        /**
         * Establecer una notificación de error en un control impedirá que se guarde el formulario.
         * 
         * @param message String. 
         * @param uniqueId String. Opcional.
         * 
         * @return Boolean. Indica si el mensaje se ha establecido correctamente.
         */
        setNotification(message: string, uniqueId?: string): boolean;

        /**
         * Establece el texto utilizado como criterio de búsqueda para el control de búsqueda de la knowledge base.
         */
        setSearchQuery(funcion: () => void): void;

        /**
         * Especifique si un control de fecha debe mostrar la parte de hora de la fecha.
         * 
         * @param bool 
         */
        setShowTime(bool: boolean): void;

        /**
         * Establece la dirección URL que se muestra en un recurso web o IFRAME.
         * 
         * @param URL 
         */
        setSrc(URL: string): void;

        /**
         * Establece un valor que indica si el control está visible.
         * 
         * @param bool 
         */
        setVisible(bool: boolean): void;
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

    type IOptionSet = {
        text: string,
        value: number
    }
}
