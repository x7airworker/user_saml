OC.L10N.register(
    "user_saml",
    {
    "This user account is disabled, please contact your administrator." : "Esta conta de usuario está desactivada, póñase en contacto coa administración desta instancia.",
    "Saved" : "Gardado",
    "Could not save" : "Non foi posíbel gardalo",
    "Provider" : "Provedor",
    "Unknown error, please check the log file for more details." : "Produciuse un erro descoñecido, revise o rexistro para obter máis información.",
    "Direct log in" : "Acceso directo",
    "SSO & SAML log in" : "Acceso SSO e SAML",
    "This page should not be visited directly." : "Esta páxina non debe ser visitada directamente.",
    "Provider " : "Provedor",
    "X.509 certificate of the Service Provider" : "Certificado X.509 do provedor do servizo",
    "Private key of the Service Provider" : "Chave privada do provedor do servizo",
    "Indicates that the nameID of the <samlp:logoutRequest> sent by this SP will be encrypted." : "Indica que o nameID do <samlp:logoutRequest> enviado por este SP vai ser cifrado.",
    "Indicates whether the <samlp:AuthnRequest> messages sent by this SP will be signed. [Metadata of the SP will offer this info]" : "Indica se as mensaxes <samlp:AuthnRequest>enviadas por este SP van seren asinadas. [Os metadatos do SP ofrecerán esta información]",
    "Indicates whether the  <samlp:logoutRequest> messages sent by this SP will be signed." : "Indica se as mensaxes <samlp:logoutRequest> enviadas por este SP van seren asinadas.",
    "Indicates whether the  <samlp:logoutResponse> messages sent by this SP will be signed." : "Indica se as mensaxes <samlp:logoutResponse> enviadas por este SP van seren asinadas.",
    "Whether the metadata should be signed." : "Se os metadatos deben ser asinados.",
    "Indicates a requirement for the <samlp:Response>, <samlp:LogoutRequest> and <samlp:LogoutResponse> elements received by this SP to be signed." : "Indica un requisito para os elementos <samlp:Response>, <samlp:LogoutRequest> e <samlp:LogoutResponse> recibidos por este SP para seren asinados.",
    "Indicates a requirement for the <saml:Assertion> elements received by this SP to be signed. [Metadata of the SP will offer this info]" : "Indica un requisito para os elementos <saml:Assertion> recibidos por este SP para seren asinados. [Os metadatos do SP ofrecerán esta información]",
    "Indicates a requirement for the <saml:Assertion> elements received by this SP to be encrypted." : "Indica un requisito para os elementos <saml:Assertion> recibidos por este SP para seren cifrados.",
    " Indicates a requirement for the NameID element on the SAMLResponse received by this SP to be present." : "Indica un requisito para que o elemento NameID no SAMLResponse recibido por este SP estea presente.",
    "Indicates a requirement for the NameID received by this SP to be encrypted." : "Indica un requisito para que o NameID recibido por este SP estea cifrado.",
    "Indicates if the SP will validate all received XML." : "Indica se o SP validará todos os XMLs recibidos.",
    "ADFS URL-Encodes SAML data as lowercase, and the toolkit by default uses uppercase. Enable for ADFS compatibility on signature verification." : "ADFS URL-Cifra datos SAML en minúsculas, e, por omisión, o conxunto de ferramentas usa maiúsculas. Active ADFS para a compatibilidade na sinatura de verificación.",
    "Algorithm that the toolkit will use on signing process." : "Algoritmo que o conxnto de ferramentas empregará no proceso de sinatura.",
    "Retrieve query parameters from $_SERVER. Some SAML servers require this on SLO requests." : "Recuperar parámetros de consulta de $_SERVER. Algúns servidores SAML precisan isto nas solicitudes de SLO.",
    "Attribute to map the UID to." : "Atributo para asignar o UID.",
    "Only allow authentication if an account exists on some other backend (e.g. LDAP)." : "Permitir a autenticación só se existe unha conta nalgunha outra infraestrutura. (p. ex. LDAP)",
    "Attribute to map the displayname to." : "Atributo para asignar o nome que amosar.",
    "Attribute to map the email address to." : "Atributo para asignar o enderezo de correo que amosar.",
    "Attribute to map the quota to." : "Atributo para asignar a cota.",
    "Attribute to map the users home to." : "Atributo para asignar o cartafol dos usuarios.",
    "Attribute to map the users groups to." : "Atributo para asignar os grupos de usuarios.",
    "Attribute to map the users MFA login status" : "Atributo para asignar o estado do acceso MFA dos usuarios",
    "Group Mapping Prefix, default: %s" : "Prefixo de asignación de grupos, predeterminado: %s",
    "Reject members of these groups. This setting has precedence over required memberships." : "Rexeitar os membros destes grupos. Este axuste ten prioridade sobre as pertenzas necesarias.",
    "Group A, Group B, …" : "Grupo A, Grupo B, …",
    "Require membership in these groups, if any." : "Precisar a pertenza a estes grupos, se é o caso.",
    "Email address" : "Enderezo de correo",
    "Encrypted" : "Cifrado",
    "Entity" : "Entidade",
    "Kerberos" : "Kerberos",
    "Persistent" : "Persistente",
    "Transient" : "Transitorio",
    "Unspecified" : "Sen especificar",
    "Windows domain qualified name" : "Nome cualificado do dominio de Windows",
    "X509 subject name" : "Nome do suxeito X509",
    "Optional display name of the identity provider (default: \"SSO & SAML log in\")" : "Nome para amosar opcional do provedor de identidade (por omisión: «rexistro SSO e SAML»)",
    "Allow the use of multiple user back-ends (e.g. LDAP)" : "Permitir o uso de várias infraestruturas de usuario (p. ex. LDAP) ",
    "SSO & SAML authentication" : "Autenticación SSO e SAML",
    "Authenticate using single sign-on" : "Autenticación usando a Identificación única (SSO)",
    "Using the SSO & SAML app of your Nextcloud you can make it easily possible to integrate your existing Single-Sign-On solution with Nextcloud. In addition, you can use the Nextcloud LDAP user provider to keep the convenience for users. (e.g. when sharing)\nThe following providers are supported and tested at the moment:\n\n* **SAML 2.0**\n\t* OneLogin\n\t* Shibboleth\n\t* Active Directory Federation Services (ADFS)\n\n* **Authentication via Environment Variable**\n\t* Kerberos (mod_auth_kerb)\n\t* Any other provider that authenticates using the environment variable\n\nWhile theoretically any other authentication provider implementing either one of those standards is compatible, we like to note that they are not part of any internal test matrix." : "Usando a aplicación SSO e SAML no seu NextCloud pode facer posíbel integrar a súa solución de «Identificación única» (Single-Sign-On)  con Nextcloud. Ademais, pode empregar o provedor de usuarios LDAP de NextCloud para conservar a conveniencia para usuarios (p. ex., ao compartir).\nPolo momento foron comprobados e son compatíbeis os seguintes provedores:\n\n* **SAML 2.0**\n\t* OneLogin\n\t* Shibboleth\n\t* Active Directory Federation Services (ADFS)\n\n* **Autenticación mediante variábel de contorno**\n\t* Kerberos (mod_auth_kerb)\n\t* Calquera outro provedor que autentique usando a variábel de contorno\n\nAínda que teoricamente calquera outro provedor de autenticación que implemente calquera destes estándares é compatíbel, queremos facer notar que non forman parte de ningunha matriz de probas interna.",
    "Open documentation" : "Abrir a documentación",
    "Make sure to configure an administrative user that can access the instance via SSO. Logging-in with your regular %s account will not be possible anymore, unless you enabled \"%s\" or you go directly to the URL %s." : "Asegúrese de configurar un usuario administrativo que poida acceder á instancia a través de SSO. Acceder coa súa conta normal %s xa non será posíbel, a non ser que teña activado «%s» ou que vaia directamente ao URL %s.",
    "Make sure to configure an administrative user that can access the instance via SSO. Logging-in with your regular %s account will not be possible anymore, unless you go directly to the URL %s." : "Asegúrese de configurar un usuario administrativo que poida acceder á instancia a través de SSO. Acceder coa súa conta normal %s xa non será posíbel, a non ser que vaia directamente ao URL %s.",
    "Please choose whether you want to authenticate using the SAML provider built-in in Nextcloud or whether you want to authenticate against an environment variable." : "Escolla se quere autenticarse usando o provedor SAML integrado en Nextcloud ou se quere autenticarse nunha variábel de contorno.",
    "Use built-in SAML authentication" : "Usar a autenticación integrada de SAML",
    "Use environment variable" : "Usar variábel de contorno",
    "Global settings" : "Axustes globais",
    "Remove identity provider" : "Retirar o provedor de identidade",
    "Add identity provider" : "Engadir un provedor de identidade",
    "General" : "Xeral",
    "Service Provider Data" : "Provedor do servizo de datos",
    "If your Service Provider should use certificates you can optionally specify them here." : "Se o seu provedor do servizo usa certificados, pode, opcionalmente, especificalos aquí.",
    "Show Service Provider settings…" : "Amosar os axustes do provedor dos servizos…",
    "Name ID format" : "Formato do ID de nome",
    "Identity Provider Data" : "Identificación do provedor de datos",
    "Identifier of the IdP entity (must be a URI)" : "Identificador da entidade IdP (ten que ser un URI)",
    "URL Target of the IdP where the SP will send the Authentication Request Message" : "URL obxectivo do IdP onde o SP enviará a mensaxe de solicitude de autenticación",
    "Show optional Identity Provider settings…" : "Amosar axustes opcionais do provedor de identidade…",
    "URL Location of the IdP where the SP will send the SLO Request" : "Enderezo URL do IdP onde o SP enviará as solicitudes SLO",
    "URL Location of the IDP's SLO Response" : "Localización URL da resposta SLO do IdP",
    "Public X.509 certificate of the IdP" : "Certificado público X.509 do IdP",
    "Attribute mapping" : "Asignación de atributos",
    "If you want to optionally map attributes to the user you can configure these here." : "Se queres asignar atributos opcionais ao usuario, podes configuralos aquí.",
    "Show attribute mapping settings…" : "Amosar  os axustes de asignación de atributos…",
    "Security settings" : "Axustes de seguranza",
    "For increased security we recommend enabling the following settings if supported by your environment." : "Para incrementar a seguranza recomendámoslle que active os seguintes axustes se son admitidos polo seu contorno.",
    "Show security settings…" : "Amosar os axustes de seguranza…",
    "Signatures and encryption offered" : "Sinaturas e cifrado ofrecidos",
    "Signatures and encryption required" : "Son ncesarios as sinaturas e o cifrado",
    "User filtering" : "Filtrado de usuarios",
    "If you want to optionally restrict user login depending on user data, configure it here." : "Se quere restrinxir opcionalmente o acceso do usuario dependendo dos datos do usuario, configúreo aquí.",
    "Show user filtering settings …" : "Amosar os axustes de filtrado de usuarios…",
    "Download metadata XML" : "Descargar metadatos en XML",
    "Reset settings" : "Restabelecer os axustes",
    "Metadata invalid" : "Metadatos incorrectos",
    "Metadata valid" : "Metadatos correctos",
    "Error" : "Erro",
    "Access denied." : "Acceso denegado",
    "Your account is denied, access to this service is thus not possible." : "A súa conta está denegada, polo que non é posíbel o acceso a este servizo.",
    "Account not provisioned." : "Conta non aprovisionada.",
    "Your account is not provisioned, access to this service is thus not possible." : "A súa conta non esta aprovisionada, polo que non é posíbel o acceso a este servizo.",
    "Login options:" : "Opcións de acceso",
    "Choose an authentication provider" : "Escoller un provedor de autenticación",
    "Group Mapping Prefix, default: SAML_" : "Prefixo de asignación de grupos, predeterminado: SAML_"
},
"nplurals=2; plural=(n != 1);");
