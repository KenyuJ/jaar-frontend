import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { gql } from '@apollo/client/core';

@Injectable({
  providedIn: 'root'
})
export class GraphqlService {
  
  constructor(private apollo: Apollo) {}

  // Método genérico para ejecutar consultas
  executeQuery<T>(query: string, variables: Record<string, any> = {}): Observable<T> {
    return this.apollo.watchQuery({
      query: gql`${query}`,
      variables,
      errorPolicy: 'all'
    }).valueChanges.pipe(
      map((result: any) => {
        if (result.errors) {
          throw new Error(result.errors.map((e: any) => e.message).join(', '));
        }
        return result.data;
      }),
      catchError(error => {
        console.error('GraphQL Query Error:', error);
        throw error;
      })
    );
  }

  // Método genérico para ejecutar mutaciones
  executeMutation<T>(mutation: string, variables: Record<string, any> = {}): Observable<T> {
    console.log(variables)
    return this.apollo.mutate({
      mutation: gql`${mutation}`,
      variables: variables,
    }).pipe(
      map((result: any) => {
        if (result.errors) {
          throw new Error(result.errors.map((e: any) => e.message).join(', '));
        }
        return result.data;
      }),
      catchError(error => {
        const message = error?.graphQLErrors?.[0]?.message;
        return throwError(() => message);
      })
    );
  }

  // Ejemplo de consulta específica
/*   getUsers(): Observable<any[]> {
    const GET_USERS = `
      query {
        users {
          id
          name
          email
        }
      }
    `;

    return this.executeQuery<{users: any[]}>(GET_USERS)
      .pipe(map(data => data.users));
  } */
}